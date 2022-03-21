import { EventMetadata, ExceptionEvent } from '@app/eventstore/event';

export class SeerStoreAlreadyExistsForOwnerExceptionData {
  owner: string;
  message?: string = 'SeerStore already exists for owner';
}

export class SeerStoreAlreadyExistsForOwnerException
  implements ExceptionEvent<SeerStoreAlreadyExistsForOwnerExceptionData>
{
  id: string;
  data: SeerStoreAlreadyExistsForOwnerExceptionData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<SeerStoreAlreadyExistsForOwnerException>) {
    Object.assign(this, { ...payload, type: `seerStore.alreadyExistsForOwner` });
  }
}
