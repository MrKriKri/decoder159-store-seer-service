import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateSeerStoreRecommendCommand } from './update-seer-store-recommend.command';
import { SeerStoreRepository } from '../../repository/store-seer.repository';
import { SeerStoreAggregate } from '../../aggregate/store-seer.aggregate';
import { EventstoreService } from '@app/eventstore';
import {SeerStoreNotFoundException} from "../../exception/store-not-found.exception";

@CommandHandler(UpdateSeerStoreRecommendCommand)
export class UpdateSeerStoreRecommendHandler
  implements ICommandHandler<UpdateSeerStoreRecommendCommand>
{
  constructor(
    private readonly storeRepository: SeerStoreRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: UpdateSeerStoreRecommendCommand) {
    const { recommended, store_id, correlationId } = command;
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

      storeAggregate.updateSeerStoreRecommend(correlationId, recommended);
      await this.storeRepository.save(storeAggregate, correlationId);
    } catch (e) {
      console.log(e);
    }
  }
}
