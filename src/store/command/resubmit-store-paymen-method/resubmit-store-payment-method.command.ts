import { PaymentMethodInput } from '../../input/store.input';

export class ResubmitStoreSeerPaymentMethodCommand{
  id: string;
  payment_method: PaymentMethodInput;
  payment_method_id: string;
  store_id: string;
  correlationId: string

  constructor(payload: ResubmitStoreSeerPaymentMethodCommand) {
    Object.assign(this, payload)
  }
}
