import { PaymentMethodInput } from '../../input/seer-store.input';

export class AddSeerStorePaymentMethodCommand {
  id: string;
  store_id: string
  payment_method: PaymentMethodInput
  correlationId: string;


  constructor(payload: AddSeerStorePaymentMethodCommand) {
    Object.assign(this, payload);
  }
}
