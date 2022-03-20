import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StoreSeerRepository } from '../../repository/store-seer.repository';
import { StoreSeerAggregate } from '../../aggregate/store-seer.aggregate';
import { ApproveStoreSeerPaymentMethodCommand } from './approve-store-payment-method.command';
import { EventstoreService } from '@app/eventstore';
import { StoreSeerNotFoundException } from 'src/store/exception/store-not-found.exception';
import { StoreSeerPaymentMethodNotFoundException } from 'src/store/exception/store-payment-method-not-found.exception';

@CommandHandler(ApproveStoreSeerPaymentMethodCommand)
export class ApproveStoreSeerPaymentMethodHandler
  implements ICommandHandler<ApproveStoreSeerPaymentMethodCommand>
{
  constructor(
    private readonly storeRepository: StoreSeerRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: ApproveStoreSeerPaymentMethodCommand) {
    const { approve_by, store_id, correlationId, payment_method_id } = command;
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

      storeAggregate.approveStoreSeerPaymentMethod(
        correlationId,
        approve_by,
        payment_method_id,
      );
      await this.storeRepository.save(storeAggregate, correlationId);
    } catch (e) {
      console.log(e);
    }
  }
}
