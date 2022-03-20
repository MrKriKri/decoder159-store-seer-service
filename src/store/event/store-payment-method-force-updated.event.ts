import { IBaseEvent, EventMetadata } from '@app/eventstore/event';
import { IPayment_method } from '../../../interface/store/payment-method';

export interface StoreSeerPaymentMethodForceUpdatedEventData {
  payment_method: IPayment_method;
  id: string;
}

export class StoreSeerPaymentMethodForceUpdatedEvent
  implements IBaseEvent<StoreSeerPaymentMethodForceUpdatedEventData>
{
  id: string;
  data: StoreSeerPaymentMethodForceUpdatedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<StoreSeerPaymentMethodForceUpdatedEvent>) {
    Object.assign(this, {
      ...payload,
      type: `storeSeer.paymentMethodForceUpdated`,
    });
  }
}
