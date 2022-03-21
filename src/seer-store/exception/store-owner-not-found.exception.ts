import { EventMetadata, ExceptionEvent } from '@app/eventstore/event';

export class SeerStoreOwnerNotFoundExceptionData {
  owner: string;
  message?: string = 'SeerStore owner not found';
}

export class SeerStoreOwnerNotFoundException
  implements ExceptionEvent<SeerStoreOwnerNotFoundExceptionData>
{
  id: string;
  data: SeerStoreOwnerNotFoundExceptionData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<SeerStoreOwnerNotFoundException>) {
    Object.assign(this, { ...payload, type: `seerStore.ownerNotFound` });
  }
}
