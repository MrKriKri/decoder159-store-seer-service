import { IBaseEvent, EventMetadata } from '@app/eventstore/event';

export interface SeerStoreActiveUpdatedEventData {
  active: boolean;
  id: string;
}

export class SeerStoreActiveUpdatedEvent
  implements IBaseEvent<SeerStoreActiveUpdatedEventData>
{
  id: string;
  data: SeerStoreActiveUpdatedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<SeerStoreActiveUpdatedEvent>) {
    Object.assign(this, {
      ...payload,
      type: `seerStore.activeUpdated`,
      data: {
        ...payload.data,
      },
    });
  }
}
