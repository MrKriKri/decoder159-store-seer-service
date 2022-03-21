import { IBaseEvent, EventMetadata } from '@app/eventstore/event';

export interface SeerStorePaymentMethodRejectedEventData {
  reason: string;
  reject_by: string;
  id: string;
  payment_method_id: string;
}

export class SeerStorePaymentMethodRejectedEvent
  implements IBaseEvent<SeerStorePaymentMethodRejectedEventData>
{
  id: string;
  data: SeerStorePaymentMethodRejectedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<SeerStorePaymentMethodRejectedEvent>) {
    Object.assign(this, { ...payload, type: `seerStore.paymentMethodRejected` });
  }
}
