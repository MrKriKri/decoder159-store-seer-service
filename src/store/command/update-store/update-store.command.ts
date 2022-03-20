import { IContact } from '../../../../interface/store/contact';
import { IProfile } from '../../../../interface/store/profile';
import { IUpdate_store_command } from '../../../../interface/store-command/update-store-command';
import { IVideo } from '../../../../interface/store/video';

export class UpdateStoreSeerCommand implements IUpdate_store_command {
  contact: IContact;
  id: string;
  profile: IProfile;
  shipping_method: string;
  store_id: string;
  correlationId: string;
  video: IVideo[]

  constructor(payload: UpdateStoreSeerCommand) {
    Object.assign(this, payload);
  }
}
