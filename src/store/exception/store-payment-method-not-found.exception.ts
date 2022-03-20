import { EventMetadata, ExceptionEvent } from '@app/eventstore/event';

export class StoreSeerPaymentMethodNotFoundExceptionData {
  id: string;
  message?: string = 'StoreSeer payment method not found';
  paymentMethodId: string;
}

export class StoreSeerPaymentMethodNotFoundException
  implements ExceptionEvent<StoreSeerPaymentMethodNotFoundExceptionData>
{
  id: string;
  data: StoreSeerPaymentMethodNotFoundExceptionData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<StoreSeerPaymentMethodNotFoundException>) {
    Object.assign(this, { ...payload, type: `storeSeer.paymentMethodNotFound` });
  }
}
