import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SeerStoreRepository } from '../../repository/store-seer.repository';
import { SeerStoreAggregate } from '../../aggregate/store-seer.aggregate';
import { UpdateReviewPointCommand } from './update-review-point.command';
import { EventstoreService } from '@app/eventstore';
import {SeerStoreNotFoundException} from "../../exception/store-not-found.exception";

@CommandHandler(UpdateReviewPointCommand)
export class UpdateReviewPointHandler
  implements ICommandHandler<UpdateReviewPointCommand>
{
  constructor(
    private readonly storeRepository: SeerStoreRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: UpdateReviewPointCommand) {
    const { store_id, review_point, correlationId } = command;

    let storeAggregate: SeerStoreAggregate;
    try {
      storeAggregate = await this.storeRepository.get(store_id);

      if (!storeAggregate) {
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

      storeAggregate.updateReviewPoint(correlationId, review_point);
      await this.storeRepository.save(storeAggregate, correlationId);
    } catch (e) {
      console.log(e);
    }
  }
}
