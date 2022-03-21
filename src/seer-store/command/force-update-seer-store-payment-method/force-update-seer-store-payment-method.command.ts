import { PaymentMethodInput } from '../../input/seer-store.input';

export class ForceUpdateSeerStorePaymentMethodCommand {
  id: string;
  payment_method: PaymentMethodInput;
  payment_method_id: string;
  store_id: string;
  correlationId: string;

  constructor(payload: ForceUpdateSeerStorePaymentMethodCommand) {
    Object.assign(this, payload);
  }
}
