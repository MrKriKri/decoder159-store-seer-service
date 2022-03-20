import { EventstoreService } from '@app/eventstore';
import { jsonEvent } from '@eventstore/db-client';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StoreSeerActiveUpdatedEvent } from '../event/store-active-updated.event';
import { InventoryItem } from '../schema/inventory-item.schema';
import { Inventory } from '../schema/inventory.schema';

@EventsHandler(StoreSeerActiveUpdatedEvent)
export class StoreSeerActiveUpdatedHandler
  implements IEventHandler<StoreSeerActiveUpdatedEvent>
{
  constructor(
    @InjectModel('inventory_items')
    private readonly inventoryItemEntity: Model<InventoryItem>,
    @InjectModel('inventories')
    private readonly inventoryEntity: Model<Inventory>,
    private readonly eventstore: EventstoreService,
  ) {}

  async publishCommand(type: string, data: any) {
    await this.eventstore.client.appendToStream(
      'command',
      jsonEvent({
        type,
        metadata: data.metadata,
        data: data.data,
      }),
    );
  }

  async handle(event: StoreSeerActiveUpdatedEvent) {
    try {
      const inventory = await this.inventoryEntity.findOne({
        'storeInventory.store_id': event.data.id,
      });
      const items = await this.inventoryItemEntity.find({
        inventory: inventory.id,
      });

      const { $correlationId } = event.metadata;
      await this.publishCommand(`inventory.updateInventoryItemsIsStoreSeerActive`, {
        data: {
          id: inventory.id,
          items: items.map((item) => ({ id: item.id, is_store_active: false })),
        },
        metadata: { $correlationId: $correlationId, timestamp: Date.now() },
      });
    } catch (e) {
      console.log(e);
    }
  }
}
