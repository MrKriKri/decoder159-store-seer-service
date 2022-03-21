import { IBaseEvent, EventMetadata } from '@app/eventstore/event';
import { IPayment_method } from '../../../interface/store/payment-method';

export interface SeerStorePaymentMethodUpdatedEventData {
  payment_method: IPayment_method;
  id: string;
}

export class SeerStorePaymentMethodUpdatedEvent
  implements IBaseEvent<SeerStorePaymentMethodUpdatedEventData>
{
  id: string;
  data: SeerStorePaymentMethodUpdatedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<SeerStorePaymentMethodUpdatedEvent>) {
    Object.assign(this, { ...payload, type: `seerStore.paymentMethodUpdated` });
  }
}
