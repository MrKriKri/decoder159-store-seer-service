import { IBaseEvent, EventMetadata } from '@app/eventstore/event';
import { IPayment_method } from '../../../interface/store/payment-method';

export interface StoreSeerPaymentMethodResubmittedEventData {
  payment_method: IPayment_method;
  id: string;
}

export class StoreSeerPaymentMethodResubmittedEvent
  implements IBaseEvent<StoreSeerPaymentMethodResubmittedEventData>
{
  id: string;
  data: StoreSeerPaymentMethodResubmittedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<StoreSeerPaymentMethodResubmittedEvent>) {
    Object.assign(this, { ...payload, type: `storeSeer.paymentMethodResubmitted` });
  }
}
