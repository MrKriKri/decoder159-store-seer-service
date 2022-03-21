import { EventMetadata, ExceptionEvent } from '@app/eventstore/event';

export class SeerStorePaymentMethodNotFoundExceptionData {
  id: string;
  message?: string = 'SeerStore payment method not found';
  paymentMethodId: string;
}

export class SeerStorePaymentMethodNotFoundException
  implements ExceptionEvent<SeerStorePaymentMethodNotFoundExceptionData>
{
  id: string;
  data: SeerStorePaymentMethodNotFoundExceptionData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<SeerStorePaymentMethodNotFoundException>) {
    Object.assign(this, { ...payload, type: `seerStore.paymentMethodNotFound` });
  }
}
