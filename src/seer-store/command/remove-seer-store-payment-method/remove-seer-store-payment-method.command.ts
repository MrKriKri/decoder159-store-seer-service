export class RemoveSeerStorePaymentMethodCommand {
  id: string;
  store_id: string
  payment_method_id: string
  correlationId: string;


  constructor(payload: RemoveSeerStorePaymentMethodCommand) {
    Object.assign(this, payload);
  }
}
