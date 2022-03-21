import { EventMetadata, ExceptionEvent } from '@app/eventstore/event';

export class SeerStoreNotFoundExceptionData {
  id: string;
  message?: string = 'SeerStore not found';
}

export class SeerStoreNotFoundException
  implements ExceptionEvent<SeerStoreNotFoundExceptionData>
{
  id: string;
  data: SeerStoreNotFoundExceptionData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<SeerStoreNotFoundException>) {
    Object.assign(this, { ...payload, type: `seerStore.notFound` });
  }
}
