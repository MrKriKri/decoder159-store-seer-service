import { IBaseEvent, EventMetadata } from '@app/eventstore/event';
import { IPayment_method } from '../../../interface/store/payment-method';

export interface SeerStorePaymentMethodAddedEventData {
  payment_method: IPayment_method;
  id: string;
}

export class SeerStorePaymentMethodAddedEvent
  implements IBaseEvent<SeerStorePaymentMethodAddedEventData>
{
  id: string;
  data: SeerStorePaymentMethodAddedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<SeerStorePaymentMethodAddedEvent>) {
    Object.assign(this, {
      ...payload,
      type: `seerStore.paymentMethodAdded`,
    });
  }
}
