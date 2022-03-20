import { IPayment_method } from '../store/payment-method';

/**
 * Model definition for update_store_payment_method_command
 */
export interface IUpdate_store_payment_method_command {
  id: string;
  payment_method: IPayment_method;
  store_id?: string;
}
