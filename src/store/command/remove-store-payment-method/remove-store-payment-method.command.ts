export class RemoveStoreSeerPaymentMethodCommand {
  id: string;
  store_id: string
  payment_method_id: string
  correlationId: string;


  constructor(payload: RemoveStoreSeerPaymentMethodCommand) {
    Object.assign(this, payload);
  }
}
