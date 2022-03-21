import { IBaseEvent, EventMetadata } from '@app/eventstore/event';

export interface SeerStorePaymentMethodApprovedEventData {
  approve_by: string;
  payment_method_id: string;
  id: string;
}

export class SeerStorePaymentMethodApprovedEvent
  implements IBaseEvent<SeerStorePaymentMethodApprovedEventData>
{
  id: string;
  data: SeerStorePaymentMethodApprovedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<SeerStorePaymentMethodApprovedEvent>) {
    Object.assign(this, { ...payload, type: `seerStore.paymentMethodApproved` });
  }
}
