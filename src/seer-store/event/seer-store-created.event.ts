import { EventMetadata, IBaseEvent } from '@app/eventstore/event';
import { IProfile } from '../../../interface/store/profile';
import {
  IPayment_method,
  PaymentMethodStatus,
} from '../../../interface/store/payment-method';
import { IContact } from '../../../interface/store/contact';
import { IVideo } from '../../../interface/store/video';

export interface SeerStoreCreatedEventData {
  owner: string;
  profile: IProfile;
  payment_method: IPayment_method[];
  shipping_method: string;
  contact: IContact;
  id: string;
  active: boolean;
  video: IVideo[];
}

export class SeerStoreCreatedEvent implements IBaseEvent<SeerStoreCreatedEventData> {
  id: string;
  data: SeerStoreCreatedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<SeerStoreCreatedEvent>) {
    Object.assign(this, {
      ...payload,
      type: `seerStore.created`,
    });
  }
}
