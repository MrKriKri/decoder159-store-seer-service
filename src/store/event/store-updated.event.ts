import { IBaseEvent, EventMetadata } from '@app/eventstore/event';
import { IContact } from '../../../interface/store/contact';
import { IProfile } from '../../../interface/store/profile';
import { IVideo } from '../../../interface/store/video';

export interface StoreSeerUpdatedEventData {
  contact: IContact;
  profile: IProfile;
  shipping_method: string;
  id: string;
  video: IVideo[]
}

export class StoreSeerUpdatedEvent implements IBaseEvent<StoreSeerUpdatedEventData> {
  id: string;
  data: StoreSeerUpdatedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<StoreSeerUpdatedEvent>) {
    Object.assign(this, { ...payload, type: `storeSeer.updated` });
  }
}
