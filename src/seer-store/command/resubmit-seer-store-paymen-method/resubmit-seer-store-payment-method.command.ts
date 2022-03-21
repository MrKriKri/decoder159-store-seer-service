import { PaymentMethodInput } from '../../input/seer-store.input';

export class ResubmitSeerStorePaymentMethodCommand{
  id: string;
  payment_method: PaymentMethodInput;
  payment_method_id: string;
  store_id: string;
  correlationId: string

  constructor(payload: ResubmitSeerStorePaymentMethodCommand) {
    Object.assign(this, payload)
  }
}
