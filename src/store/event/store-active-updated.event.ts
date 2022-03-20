import { IBaseEvent, EventMetadata } from '@app/eventstore/event';

export interface StoreSeerActiveUpdatedEventData {
  active: boolean;
  id: string;
}

export class StoreSeerActiveUpdatedEvent
  implements IBaseEvent<StoreSeerActiveUpdatedEventData>
{
  id: string;
  data: StoreSeerActiveUpdatedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<StoreSeerActiveUpdatedEvent>) {
    Object.assign(this, {
      ...payload,
      type: `storeSeer.activeUpdated`,
      data: {
        ...payload.data,
      },
    });
  }
}
