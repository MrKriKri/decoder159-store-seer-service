import { PaymentMethodInput } from '../../input/store.input';

export class ForceUpdateStoreSeerPaymentMethodCommand {
  id: string;
  payment_method: PaymentMethodInput;
  payment_method_id: string;
  store_id: string;
  correlationId: string;

  constructor(payload: ForceUpdateStoreSeerPaymentMethodCommand) {
    Object.assign(this, payload);
  }
}
