import { Schema } from 'mongoose';

export interface IDiscount {
  amount: number;
  unit: 'percentage' | 'fix';
}

export interface InventoryItem {
  id: string;
  category: InventoryCategory;
  status: ItemStatus;
  detail: SimCardDetail;
  inventory: string;
  proudly_presented: boolean;
  recommended: boolean;
  gross_price: number;
  net_price: number;
  dicounts: IDiscount[];
}

export interface SimCardDetail {
  price: number;
  custom_attribute: ICustomAttribute[];
  jobs: IJobs[];
  plan_type: string;
  activated: boolean;
  note: string;
  display_phone_number: string;
  phone_number: string;
  expiry_date: Date;
  description: string;
  provider: string;
  money: string;
  charm: string;
  luck: string;
  health: string;
  wit: string;
}
export interface ICustomAttribute {
  title: string;
}

export interface IJobs {
  title: string;
}

export enum ItemStatus {
  SOLD = `sold`,
  ACTIVE = `active`,
  BAN = `ban`,
  HIDE = `hide`,
  REMOVE = `remove`,
}

export enum InventoryCategory {
  SIMCARD = 'sim_card',
  LICENSE_PLATE = 'license_plate',
}

export const InventoryItemSchema = new Schema<InventoryItem>({
  id: { type: String, required: true },
  category: { type: String, required: false },
  status: { type: String, required: false },
  proudly_presented: { type: Boolean, required: false },
  recommended: { type: Boolean, required: false },
  detail: {
    price: { type: Number, required: false },
    custom_attribute: [{ title: { type: String, required: false } }],
    jobs: [{ title: { type: String, required: false } }],
    plan_type: { type: String, required: false },
    activated: { type: Boolean, required: false },
    note: { type: String, required: false },
    display_phone_number: { type: String, required: false },
    phone_number: { type: String, required: false },
    expiry_date: { type: Date, required: false },
    description: { type: String, required: false },
    provider: { type: String, required: false },
    money: { type: String, required: false },
    charm: { type: String, required: false },
    luck: { type: String, required: false },
    health: { type: String, required: false },
    wit: { type: String, required: false },
  },
  inventory: { type: String, required: false },
  gross_price: { type: Number, required: false },
  net_price: { type: Number, required: false },
  dicounts: { type: [Object], required: false },
});
