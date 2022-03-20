import { IBaseEvent, EventMetadata } from '@app/eventstore/event';
import { IPayment_method } from '../../../interface/store/payment-method';

export interface StoreSeerPaymentMethodUpdatedEventData {
  payment_method: IPayment_method;
  id: string;
}

export class StoreSeerPaymentMethodUpdatedEvent
  implements IBaseEvent<StoreSeerPaymentMethodUpdatedEventData>
{
  id: string;
  data: StoreSeerPaymentMethodUpdatedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<StoreSeerPaymentMethodUpdatedEvent>) {
    Object.assign(this, { ...payload, type: `storeSeer.paymentMethodUpdated` });
  }
}
