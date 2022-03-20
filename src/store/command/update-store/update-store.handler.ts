import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StoreSeerRepository } from '../../repository/store-seer.repository';
import { StoreSeerAggregate } from '../../aggregate/store-seer.aggregate';
import { UpdateStoreSeerCommand } from './update-store.command';
import { StoreSeerNotFoundException } from 'src/store/exception/store-not-found.exception';
import { EventstoreService } from '@app/eventstore';

@CommandHandler(UpdateStoreSeerCommand)
export class UpdateStoreSeerHandler implements ICommandHandler<UpdateStoreSeerCommand> {
  constructor(
    private readonly storeRepository: StoreSeerRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: UpdateStoreSeerCommand) {
    const { contact, profile, store_id, correlationId, shipping_method, video } =
      command;

    let storeSeerAggregate: StoreSeerAggregate;
    try {
      storeSeerAggregate = await this.storeRepository.get(store_id);

      if (!storeSeerAggregate) {
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

      storeSeerAggregate.updateStoreSeer(
        correlationId,
        profile,
        contact,
        shipping_method,
        video
      );
      await this.storeRepository.save(storeSeerAggregate, correlationId);
    } catch (e) {
      console.log(e);
    }
  }
}
