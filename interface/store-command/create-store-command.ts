import { IAddress } from '../generic/address';
import { IContact } from '../store/contact';
import { IPayment_method } from '../store/payment-method';

/**
 * Model definition for create_store_command
 */
export interface ICreate_store_command {
  id: string;
  user_id?: string;
  id_card_url?: string;
  address?: IAddress;
  contract?: IContact;
  payment_method: IPayment_method[];
}
