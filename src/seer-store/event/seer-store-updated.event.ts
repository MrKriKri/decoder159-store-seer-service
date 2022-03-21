import { IBaseEvent, EventMetadata } from '@app/eventstore/event';
import { IContact } from '../../../interface/store/contact';
import { IProfile } from '../../../interface/store/profile';
import { IVideo } from '../../../interface/store/video';

export interface SeerStoreUpdatedEventData {
  contact: IContact;
  profile: IProfile;
  shipping_method: string;
  id: string;
  video: IVideo[]
}

export class SeerStoreUpdatedEvent implements IBaseEvent<SeerStoreUpdatedEventData> {
  id: string;
  data: SeerStoreUpdatedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<SeerStoreUpdatedEvent>) {
    Object.assign(this, { ...payload, type: `seerStore.updated` });
  }
}
