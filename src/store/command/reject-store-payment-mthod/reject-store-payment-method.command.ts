import { IReject_store_payment_method_command } from '../../../../interface/store-command/reject-store-payment-method-command';

export class RejectStoreSeerPaymentMethodCommand
  implements IReject_store_payment_method_command
{
  id: string;
  reason: string;
  reject_by: string;
  store_id: string;
  payment_method_id: string;
  correlationId: string;

  constructor(payload: RejectStoreSeerPaymentMethodCommand) {
    Object.assign(this, payload);
  }
}
