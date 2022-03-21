import { IApprove_store_payment_method_command } from '../../../../interface/store-command/approve-store-payment-method-command';

export class ApproveSeerStorePaymentMethodCommand
  implements IApprove_store_payment_method_command
{
  approve_by: string;
  id: string;
  store_id: string;
  payment_method_id: string;
  correlationId: string;

  constructor(payload: ApproveSeerStorePaymentMethodCommand) {
    Object.assign(this, payload);
  }
}
