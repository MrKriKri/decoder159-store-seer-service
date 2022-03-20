import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StoreSeerRepository } from '../../repository/store-seer.repository';
import { StoreSeerAggregate } from '../../aggregate/store-seer.aggregate';
import { UpdateStoreSeerPaymentMethodCommand } from './update-store-payment-method.command';
import { StoreSeerNotFoundException } from 'src/store/exception/store-not-found.exception';
import { EventstoreService } from '@app/eventstore';
import { StoreSeerPaymentMethodNotFoundException } from 'src/store/exception/store-payment-method-not-found.exception';

@CommandHandler(UpdateStoreSeerPaymentMethodCommand)
export class UpdateStoreSeerPaymentMethodHandler
  implements ICommandHandler<UpdateStoreSeerPaymentMethodCommand>
{
  constructor(
    private readonly storeRepository: StoreSeerRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: UpdateStoreSeerPaymentMethodCommand) {
    const { payment_method, store_id, correlationId, payment_method_id } =
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

      storeAggregate.updateStoreSeerPaymentMethod(
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
