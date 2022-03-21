import { IContact } from './store/contact';
import { IPayment_method } from './store/payment-method';
import { IProfile } from './store/profile';
import { IVideo } from './store/video';

export interface ISeerStore {
  id: string;
  review_point: number;
  owner: string;
  profile: IProfile;
  recommended: boolean;
  payment_method: IPayment_method[];
  contact: IContact;
  active: boolean;
  video: IVideo[]
}
