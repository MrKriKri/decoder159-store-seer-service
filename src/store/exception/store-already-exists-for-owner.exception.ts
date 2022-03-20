import { EventMetadata, ExceptionEvent } from '@app/eventstore/event';

export class StoreSeerAlreadyExistsForOwnerExceptionData {
  owner: string;
  message?: string = 'StoreSeer already exists for owner';
}

export class StoreSeerAlreadyExistsForOwnerException
  implements ExceptionEvent<StoreSeerAlreadyExistsForOwnerExceptionData>
{
  id: string;
  data: StoreSeerAlreadyExistsForOwnerExceptionData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<StoreSeerAlreadyExistsForOwnerException>) {
    Object.assign(this, { ...payload, type: `storeSeer.alreadyExistsForOwner` });
  }
}
