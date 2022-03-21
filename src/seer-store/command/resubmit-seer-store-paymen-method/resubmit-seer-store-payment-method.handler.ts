import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SeerStoreRepository } from '../../repository/store-seer.repository';
import { SeerStoreAggregate } from '../../aggregate/store-seer.aggregate';
import { ResubmitSeerStorePaymentMethodCommand } from './resubmit-seer-store-payment-method.command';
import { EventstoreService } from '@app/eventstore';
import {SeerStoreNotFoundException} from "../../exception/store-not-found.exception";
import {SeerStorePaymentMethodNotFoundException} from "../../exception/store-payment-method-not-found.exception";

@CommandHandler(ResubmitSeerStorePaymentMethodCommand)
export class ResubmitSeerStorePaymentMethodHandler
  implements ICommandHandler<ResubmitSeerStorePaymentMethodCommand>
{
  constructor(
    private readonly storeRepository: SeerStoreRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: ResubmitSeerStorePaymentMethodCommand) {
    const { payment_method, store_id, correlationId, payment_method_id } =
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

      if (!storeSeerAggregate.isPaymentMethodExists(payment_method_id)) {
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

      storeSeerAggregate.resubmitSeerStorePaymentMethod(
        correlationId,
        { ...payment_method },
        payment_method_id,
      );
      await this.storeRepository.save(storeSeerAggregate, correlationId);
    } catch (e) {
      console.log(e);
    }
  }
}
