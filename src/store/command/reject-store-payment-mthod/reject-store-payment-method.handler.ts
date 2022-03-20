import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StoreSeerRepository } from '../../repository/store-seer.repository';
import { StoreSeerAggregate } from '../../aggregate/store-seer.aggregate';
import { RejectStoreSeerPaymentMethodCommand } from './reject-store-payment-method.command';
import { EventstoreService } from '@app/eventstore';
import { StoreSeerNotFoundException } from 'src/store/exception/store-not-found.exception';
import { StoreSeerPaymentMethodNotFoundException } from 'src/store/exception/store-payment-method-not-found.exception';

@CommandHandler(RejectStoreSeerPaymentMethodCommand)
export class RejectStoreSeerPaymentMethodHandler
  implements ICommandHandler<RejectStoreSeerPaymentMethodCommand>
{
  constructor(
    private readonly storeRepository: StoreSeerRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: RejectStoreSeerPaymentMethodCommand) {
    const { reason, reject_by, store_id, payment_method_id, correlationId } =
      command;
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

      if (!storeAggregate.isPaymentMethodExists(payment_method_id)) {
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

      storeAggregate.rejectStoreSeerPaymentMethod(
        correlationId,
        reject_by,
        reason,
        payment_method_id,
      );
      await this.storeRepository.save(storeAggregate, correlationId);
    } catch (e) {
      console.log(e);
    }
  }
}
