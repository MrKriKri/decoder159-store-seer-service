import { IContact } from '../store/contact';
import { IProfile } from '../store/profile';

/**
 * Model definition for update_store_command
 */
export interface IUpdate_store_command {
  id: string;
  store_id?: string;
  profile?: IProfile;
  contact?: IContact;
}
