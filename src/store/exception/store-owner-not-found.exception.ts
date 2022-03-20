import { EventMetadata, ExceptionEvent } from '@app/eventstore/event';

export class StoreSeerOwnerNotFoundExceptionData {
  owner: string;
  message?: string = 'StoreSeer owner not found';
}

export class StoreSeerOwnerNotFoundException
  implements ExceptionEvent<StoreSeerOwnerNotFoundExceptionData>
{
  id: string;
  data: StoreSeerOwnerNotFoundExceptionData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<StoreSeerOwnerNotFoundException>) {
    Object.assign(this, { ...payload, type: `storeSeer.ownerNotFound` });
  }
}
