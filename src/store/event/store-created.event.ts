import { EventMetadata, IBaseEvent } from '@app/eventstore/event';
import { IProfile } from '../../../interface/store/profile';
import {
  IPayment_method,
  PaymentMethodStatus,
} from '../../../interface/store/payment-method';
import { IContact } from '../../../interface/store/contact';
import { IVideo } from '../../../interface/store/video';

export interface StoreSeerCreatedEventData {
  owner: string;
  profile: IProfile;
  payment_method: IPayment_method[];
  shipping_method: string;
  contact: IContact;
  id: string;
  active: boolean;
  video: IVideo[];
}

export class StoreSeerCreatedEvent implements IBaseEvent<StoreSeerCreatedEventData> {
  id: string;
  data: StoreSeerCreatedEventData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<StoreSeerCreatedEvent>) {
    Object.assign(this, {
      ...payload,
      type: `storeSeer.created`,
    });
  }
}
