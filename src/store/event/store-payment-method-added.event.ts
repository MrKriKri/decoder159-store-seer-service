import { IBaseEvent, EventMetadata } from '@app/eventstore/event';
import { IPayment_method } from '../../../interface/store/payment-method';

export interface StoreSeerPaymentMethodAddedEventData {
  payment_method: IPayment_method;
  id: string;
}

export class StoreSeerPaymentMethodAddedEvent
  implements IBaseEvent<StoreSeerPaymentMethodAddedEventData>
{
  id: string;
  data: StoreSeerPaymentMethodAddedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<StoreSeerPaymentMethodAddedEvent>) {
    Object.assign(this, {
      ...payload,
      type: `storeSeer.paymentMethodAdded`,
    });
  }
}
