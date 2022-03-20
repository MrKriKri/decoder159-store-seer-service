import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StoreSeerRepository } from '../../repository/store-seer.repository';
import { StoreSeerAggregate } from '../../aggregate/store-seer.aggregate';
import { ResubmitStoreSeerPaymentMethodCommand } from './resubmit-store-payment-method.command';
import { EventstoreService } from '@app/eventstore';
import { StoreSeerNotFoundException } from 'src/store/exception/store-not-found.exception';
import { StoreSeerPaymentMethodNotFoundException } from 'src/store/exception/store-payment-method-not-found.exception';

@CommandHandler(ResubmitStoreSeerPaymentMethodCommand)
export class ResubmitStoreSeerPaymentMethodHandler
  implements ICommandHandler<ResubmitStoreSeerPaymentMethodCommand>
{
  constructor(
    private readonly storeRepository: StoreSeerRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: ResubmitStoreSeerPaymentMethodCommand) {
    const { payment_method, store_id, correlationId, payment_method_id } =
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

      if (!storeSeerAggregate.isPaymentMethodExists(payment_method_id)) {
        await this.eventstoreService.publishException(
          new StoreSeerPaymentMethodNotFoundException({
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

      storeSeerAggregate.resubmitStoreSeerPaymentMethod(
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
