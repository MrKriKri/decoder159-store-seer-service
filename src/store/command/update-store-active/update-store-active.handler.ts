import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StoreSeerRepository } from '../../repository/store-seer.repository';
import { StoreSeerAggregate } from '../../aggregate/store-seer.aggregate';
import { UpdateStoreSeerActiveCommand } from './update-store-active.command';
import { EventstoreService } from '@app/eventstore';
import { StoreSeerNotFoundException } from 'src/store/exception/store-not-found.exception';

@CommandHandler(UpdateStoreSeerActiveCommand)
export class UpdateStoreSeerActiveHandler
  implements ICommandHandler<UpdateStoreSeerActiveCommand>
{
  constructor(
    private readonly storeRepository: StoreSeerRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: UpdateStoreSeerActiveCommand) {
    const { store_id, active, correlationId } = command;
    let storeAggregate: StoreSeerAggregate;
    try {
      storeAggregate = await this.storeRepository.get(store_id);

      if (!storeAggregate) {
        await this.eventstoreService.publishException(
          new StoreSeerNotFoundException({
            data: {
              id: store_id,
            },
            metadata: {
              timestamp: Date.now(),
              $correlationId: command.correlationId,
            },
          }),
        );

        return;
      }

      storeAggregate.updateActive(active, correlationId);
      await this.storeRepository.save(storeAggregate, correlationId);
    } catch (e) {
      console.log(e);
    }
  }
}
