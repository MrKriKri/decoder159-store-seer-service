import { PaymentMethodInput } from '../../input/store.input';

export class AddStoreSeerPaymentMethodCommand {
  id: string;
  store_id: string
  payment_method: PaymentMethodInput
  correlationId: string;


  constructor(payload: AddStoreSeerPaymentMethodCommand) {
    Object.assign(this, payload);
  }
}
