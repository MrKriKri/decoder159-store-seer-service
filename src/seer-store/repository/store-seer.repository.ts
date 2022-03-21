import { jsonEvent } from '@eventstore/db-client';
import { Injectable } from '@nestjs/common';
import { EventstoreService } from '@app/eventstore';
import { EventMetadata } from '@app/eventstore/event';
import { v4 as uuid } from 'uuid';
import { SeerStoreAggregate } from '../aggregate/store-seer.aggregate';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class SeerStoreRepository {
  constructor(
    private readonly eventstore: EventstoreService,
    @InjectConnection()
    private readonly connection: Connection,
  ) {}

  async isSeerStoreExistForOwner(ownerId: string): Promise<boolean> {
    const entity = await this.connection.db
      .collection('store-seer')
      .find({ owner: ownerId })
      .toArray();

    return entity.length > 0;
  }

  async get(id: string) {
    const events = (
      await this.eventstore.readStream(id, { resolveLinkTos: true })
    )
      .map((x) => x.event)
      .filter((x) => !!x)
      .map((x) => ({
        ...x,
        metadata: new EventMetadata({
          ...(x.metadata as unknown as EventMetadata),
        }),
      })); // map metadata

    const storeSeerAggregate = new SeerStoreAggregate();
    storeSeerAggregate.stream = id;
    storeSeerAggregate.revision = events[events.length - 1].revision;

    storeSeerAggregate.loadFromHistory(events);

    return storeSeerAggregate;
  }

  async save(storeSeerAggregate: SeerStoreAggregate, correlationId: string) {
    try {
      const timestamp = Date.now();
      const $correlationId = correlationId;
      const expectedRevision =
        storeSeerAggregate.revision === 'no_stream'
          ? 'no_stream'
          : BigInt(Number(storeSeerAggregate.revision));

      await Promise.all([
        this.eventstore.client.appendToStream(
          storeSeerAggregate.stream,
          storeSeerAggregate.getUncommittedEvents().map((x) =>
            jsonEvent({
              type: x.type,
              data: x.data,
              metadata: { $correlationId, timestamp },
            }),
          ),
          {
            expectedRevision,
          },
        ),
        this.eventstore.client.appendToStream(
          `snapshot-${storeSeerAggregate.stream}`,
          jsonEvent({
            type: `Snapshot`,
            data: {
              ...storeSeerAggregate,
              revision:
                expectedRevision === 'no_stream'
                  ? storeSeerAggregate.getUncommittedEvents().length - 1
                  : Number(expectedRevision) +
                    storeSeerAggregate.getUncommittedEvents().length,
            },
            metadata: { timestamp },
          }),
          {
            expectedRevision: 'any',
          },
        ),
      ]);

      storeSeerAggregate.uncommit(); // clear events

      return storeSeerAggregate;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }

  create() {
    const storeSeerAggregate = new SeerStoreAggregate();
    storeSeerAggregate.stream = `storeSeer-${uuid()}`;
    storeSeerAggregate.revision = 'no_stream';

    return storeSeerAggregate;
  }
}
