import { IBaseEvent, EventMetadata } from '@app/eventstore/event';
import { IPayment_method } from '../../../interface/store/payment-method';

export interface SeerStorePaymentMethodResubmittedEventData {
  payment_method: IPayment_method;
  id: string;
}

export class SeerStorePaymentMethodResubmittedEvent
  implements IBaseEvent<SeerStorePaymentMethodResubmittedEventData>
{
  id: string;
  data: SeerStorePaymentMethodResubmittedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<SeerStorePaymentMethodResubmittedEvent>) {
    Object.assign(this, { ...payload, type: `seerStore.paymentMethodResubmitted` });
  }
}
