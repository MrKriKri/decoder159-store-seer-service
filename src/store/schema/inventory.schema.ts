import * as mongoose from 'mongoose';

export interface Inventory {
  id: string;
  storeInventory: InventoryStoreSeer;
  status: InventoryStatus;
}

export interface InventoryStoreSeer {
  policy: InventoryStoreSeerPolicy;
  store_id: string;
}

export interface InventoryStoreSeerPolicy {
  functionable: boolean;
  simcard_capacity: number;
  recommend_capacity: number;
  pround_present_capacity: number;
}

export enum InventoryStatus {
  ACTIVE = 'active',
  EXPIRE = 'expire',
}

export const InventorySchema = new mongoose.Schema<Inventory>({
  id: { type: String, required: true },
  storeInventory: {
    policy: {
      functionable: { type: Boolean, required: true },
      simcard_capacity: { type: Number, required: true },
      recommend_capacity: { type: Number, required: true },
      pround_present_capacity: { type: Number, required: true },
    },
    store_id: { type: String, required: true },
  },
  status: { type: String, required: true },
});
