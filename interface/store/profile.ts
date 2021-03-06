/**
 * Model definition for profile
 */
import { IAddress } from '../generic/address';

export interface IProfile {
  logo_url: string;
  slug: string;
  name: string;
  banner_url: IBanner[];
  address: IAddress;
  description: string
  portfolio: string
  service_rate: string
}


export interface IBanner {
  banner_mobile_url: string;
  banner_url: string;
  link_to: string
}
