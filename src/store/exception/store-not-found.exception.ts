import { EventMetadata, ExceptionEvent } from '@app/eventstore/event';

export class StoreSeerNotFoundExceptionData {
  id: string;
  message?: string = 'StoreSeer not found';
}

export class StoreSeerNotFoundException
  implements ExceptionEvent<StoreSeerNotFoundExceptionData>
{
  id: string;
  data: StoreSeerNotFoundExceptionData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<StoreSeerNotFoundException>) {
    Object.assign(this, { ...payload, type: `storeSeer.notFound` });
  }
}
