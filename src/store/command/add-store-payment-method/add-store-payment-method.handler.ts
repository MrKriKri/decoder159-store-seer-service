import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StoreSeerRepository } from '../../repository/store-seer.repository';
import { StoreSeerAggregate } from '../../aggregate/store-seer.aggregate';
import { AddStoreSeerPaymentMethodCommand } from './add-store-payment-method.command';
import { StoreSeerNotFoundException } from 'src/store/exception/store-not-found.exception';
import { EventstoreService } from '@app/eventstore';

@CommandHandler(AddStoreSeerPaymentMethodCommand)
export class AddStoreSeerPaymentMethodHandler
  implements ICommandHandler<AddStoreSeerPaymentMethodCommand>
{
  constructor(
    private readonly storeRepository: StoreSeerRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: AddStoreSeerPaymentMethodCommand) {
    const { payment_method, store_id, correlationId } = command;
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
      storeAggregate.addStoreSeerPaymentMethod(correlationId, payment_method);
      await this.storeRepository.save(storeAggregate, correlationId);
    } catch (e) {
      console.log(e);
    }
  }
}
