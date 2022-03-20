import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateStoreSeerRecommendCommand } from './update-store-recommend.command';
import { StoreSeerRepository } from '../../repository/store-seer.repository';
import { StoreSeerAggregate } from '../../aggregate/store-seer.aggregate';
import { EventstoreService } from '@app/eventstore';
import { StoreSeerNotFoundException } from 'src/store/exception/store-not-found.exception';

@CommandHandler(UpdateStoreSeerRecommendCommand)
export class UpdateStoreSeerRecommendHandler
  implements ICommandHandler<UpdateStoreSeerRecommendCommand>
{
  constructor(
    private readonly storeRepository: StoreSeerRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: UpdateStoreSeerRecommendCommand) {
    const { recommended, store_id, correlationId } = command;
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

      storeAggregate.updateStoreSeerRecommend(correlationId, recommended);
      await this.storeRepository.save(storeAggregate, correlationId);
    } catch (e) {
      console.log(e);
    }
  }
}
