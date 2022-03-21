import { IProfile } from '../../../interface/store/profile';
import { IPayment_method } from '../../../interface/store/payment-method';
import { IContact } from '../../../interface/store/contact';
import { ISeerStore } from '../../../interface/store';
import { IVideo } from '../../../interface/store/video';

export class SeerStoreState implements ISeerStore {
  id: string;
  review_point: number;
  owner: string;
  profile: IProfile;
  recommended: boolean;
  payment_method: IPayment_method[];
  contact: IContact;
  active: boolean;
  video: IVideo[]

  constructor(payload: SeerStoreState) {
    Object.assign(this, payload);
  }
}
