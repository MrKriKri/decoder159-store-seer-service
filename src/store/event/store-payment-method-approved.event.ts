import { IBaseEvent, EventMetadata } from '@app/eventstore/event';

export interface StoreSeerPaymentMethodApprovedEventData {
  approve_by: string;
  payment_method_id: string;
  id: string;
}

export class StoreSeerPaymentMethodApprovedEvent
  implements IBaseEvent<StoreSeerPaymentMethodApprovedEventData>
{
  id: string;
  data: StoreSeerPaymentMethodApprovedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<StoreSeerPaymentMethodApprovedEvent>) {
    Object.assign(this, { ...payload, type: `storeSeer.paymentMethodApproved` });
  }
}
