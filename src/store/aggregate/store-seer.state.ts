import { IProfile } from '../../../interface/store/profile';
import { IPayment_method } from '../../../interface/store/payment-method';
import { IContact } from '../../../interface/store/contact';
import { IStoreSeer } from '../../../interface/store';
import { IVideo } from '../../../interface/store/video';

export class StoreSeerState implements IStoreSeer {
  id: string;
  review_point: number;
  owner: string;
  profile: IProfile;
  recommended: boolean;
  payment_method: IPayment_method[];
  shipping_method: string;
  contact: IContact;
  active: boolean;
  video: IVideo[]

  constructor(payload: StoreSeerState) {
    Object.assign(this, payload);
  }
}
