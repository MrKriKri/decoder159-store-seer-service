import { IProfile } from '../../../../interface/store/profile';
import { IContact } from '../../../../interface/store/contact';
import { PaymentMethodInput } from '../../input/seer-store.input';
import { IVideo } from '../../../../interface/store/video';

export class CreateSeerStoreCommand {
  profile: IProfile;
  contact: IContact;
  id: string;
  owner: string;
  payment_method: PaymentMethodInput[];
  shipping_method: string;
  correlationId: string;
  active: boolean;
  video: IVideo[];

  constructor(payload: CreateSeerStoreCommand) {
    Object.assign(this, payload);
  }
}
