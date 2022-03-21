import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SeerStoreRepository } from '../../repository/store-seer.repository';
import { SeerStoreAggregate } from '../../aggregate/store-seer.aggregate';
import { ForceUpdateSeerStorePaymentMethodCommand } from './force-update-seer-store-payment-method.command';
import { EventstoreService } from '@app/eventstore';
import {SeerStoreNotFoundException} from "../../exception/store-not-found.exception";
import {SeerStorePaymentMethodNotFoundException} from "../../exception/store-payment-method-not-found.exception";

@CommandHandler(ForceUpdateSeerStorePaymentMethodCommand)
export class ForceUpdateSeerStorePaymentMethodHandler
  implements ICommandHandler<ForceUpdateSeerStorePaymentMethodCommand>
{
  constructor(
    private readonly storeRepository: SeerStoreRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: ForceUpdateSeerStorePaymentMethodCommand) {
    const { payment_method, store_id, correlationId, payment_method_id } =
      command;
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

      if (!storeAggregate.isPaymentMethodExists(payment_method_id)) {
        await this.eventstoreService.publishException(
          new SeerStorePaymentMethodNotFoundException({
            data: {
              id: store_id,
              paymentMethodId: payment_method_id,
            },
            metadata: {
              timestamp: Date.now(),
              $correlationId: command.correlationId,
            },
          }),
        );

        return;
      }

      storeAggregate.forceUpdateSeerStorePaymentMethod(
        correlationId,
        { ...payment_method },
        payment_method_id,
      );
      await this.storeRepository.save(storeAggregate, correlationId);
    } catch (e) {
      console.log(e);
    }
  }
}
