import { IBaseEvent, EventMetadata } from '@app/eventstore/event';

export interface StoreSeerPaymentMethodRejectedEventData {
  reason: string;
  reject_by: string;
  id: string;
  payment_method_id: string;
}

export class StoreSeerPaymentMethodRejectedEvent
  implements IBaseEvent<StoreSeerPaymentMethodRejectedEventData>
{
  id: string;
  data: StoreSeerPaymentMethodRejectedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<StoreSeerPaymentMethodRejectedEvent>) {
    Object.assign(this, { ...payload, type: `storeSeer.paymentMethodRejected` });
  }
}
