import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StoreSeerRepository } from '../../repository/store-seer.repository';
import { StoreSeerAggregate } from '../../aggregate/store-seer.aggregate';
import { UpdateReviewPointCommand } from './update-review-point.command';
import { StoreSeerNotFoundException } from 'src/store/exception/store-not-found.exception';
import { EventstoreService } from '@app/eventstore';

@CommandHandler(UpdateReviewPointCommand)
export class UpdateReviewPointHandler
  implements ICommandHandler<UpdateReviewPointCommand>
{
  constructor(
    private readonly storeRepository: StoreSeerRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: UpdateReviewPointCommand) {
    const { store_id, review_point, correlationId } = command;

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

      storeAggregate.updateReviewPoint(correlationId, review_point);
      await this.storeRepository.save(storeAggregate, correlationId);
    } catch (e) {
      console.log(e);
    }
  }
}
