import { IBaseEvent, EventMetadata } from '@app/eventstore/event';
import { IPayment_method } from '../../../interface/store/payment-method';

export interface SeerStorePaymentMethodForceUpdatedEventData {
  payment_method: IPayment_method;
  id: string;
}

export class SeerStorePaymentMethodForceUpdatedEvent
  implements IBaseEvent<SeerStorePaymentMethodForceUpdatedEventData>
{
  id: string;
  data: SeerStorePaymentMethodForceUpdatedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<SeerStorePaymentMethodForceUpdatedEvent>) {
    Object.assign(this, {
      ...payload,
      type: `seerStore.paymentMethodForceUpdated`,
    });
  }
}
