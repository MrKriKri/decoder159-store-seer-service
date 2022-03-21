import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SeerStoreRepository } from '../../repository/store-seer.repository';
import { SeerStoreAggregate } from '../../aggregate/store-seer.aggregate';
import { UpdateSeerStoreCommand } from './update-seer-store.command';
import { EventstoreService } from '@app/eventstore';
import {SeerStoreNotFoundException} from "../../exception/store-not-found.exception";

@CommandHandler(UpdateSeerStoreCommand)
export class UpdateSeerStoreHandler implements ICommandHandler<UpdateSeerStoreCommand> {
  constructor(
    private readonly storeRepository: SeerStoreRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: UpdateSeerStoreCommand) {
    const { contact, profile, store_id, correlationId, shipping_method, video } =
      command;

    let storeSeerAggregate: SeerStoreAggregate;
    try {
      storeSeerAggregate = await this.storeRepository.get(store_id);

      if (!storeSeerAggregate) {
        await this.eventstoreService.publishException(
          new SeerStoreNotFoundException({
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

      storeSeerAggregate.updateSeerStore(
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
