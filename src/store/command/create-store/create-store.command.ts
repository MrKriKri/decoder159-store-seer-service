import { IProfile } from '../../../../interface/store/profile';
import { IContact } from '../../../../interface/store/contact';
import { PaymentMethodInput } from '../../input/store.input';
import { IVideo } from '../../../../interface/store/video';

export class CreateStoreSeerCommand {
  profile: IProfile;
  contact: IContact;
  id: string;
  owner: string;
  payment_method: PaymentMethodInput[];
  shipping_method: string;
  correlationId: string;
  active: boolean;
  video: IVideo[];

  constructor(payload: CreateStoreSeerCommand) {
    Object.assign(this, payload);
  }
}
