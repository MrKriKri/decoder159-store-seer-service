export interface IPayment_method {
  id: string;
  name: string;
  description: string;
  status?: PaymentMethodStatus;
  note: string;
  bookbank_image_url: string;
}

export enum PaymentMethodStatus {
  PENDING = 'pending',
  APPROVE = 'approve',
  REJECT = 'reject',
  PENDING_UPDATE_APPROVAL = `pending_update_approval`,
  RESUBMIT= 'resubmit'
}
