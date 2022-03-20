import { EventstoreService } from '@app/eventstore';
import {
  JSONRecordedEvent,
  PersistentSubscription,
  ResolvedEvent,
} from '@eventstore/db-client';
import { Injectable, Scope } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';

@Injectable({ scope: Scope.TRANSIENT })
export class CommandSubscriptionService {
  constructor(
    private readonly eventstore: EventstoreService,
    private readonly eventBus: EventBus,
  ) { }


  isTimeout(event: JSONRecordedEvent, ms: number) {
    const source = event.created + ms * 10000;
    const current = Date.now() * 1000 * 10;

    return source < current;
  }

  start(
    streamName: string,
    subscribeServiceHandler: Map<string, any>,
    context: any,
    workerName: string,
    type: `command` | `event`
  ) {

    const subscription: PersistentSubscription = this.eventstore.client.connectToPersistentSubscription(
      `${streamName}`,
      workerName,
      {
        bufferSize: 1,
      },
    );
    subscription.on('error', async (error) => {
      console.error(error.message);
      if (
        error.message ===
        `5 NOT_FOUND: Subscription group ${workerName} on stream ${streamName} does not exist.`
      ) {
        await this.eventstore.client.createPersistentSubscription(
          `${streamName}`,
          workerName,
          {
            resolveLinkTos: true,
            readBatchSize: 1,
            minCheckpointCount: 1,
            checkpointAfter: 1000,
            extraStats: false,
            fromRevision: BigInt(0),
            historyBufferSize: 500,
            liveBufferSize: 500,
            maxCheckpointCount: 500,
            maxRetryCount: 10,
            maxSubscriberCount: 10,
            messageTimeout: 5000,
            strategy: 'round_robin',
          },
        );

        this.start(streamName, subscribeServiceHandler, context, workerName, type);
      } else {
        process.exit(1);
      }
    });
    subscription.on('close', () => {
      this.start(streamName, subscribeServiceHandler, context, workerName, type);
    });
    subscription.on('data', (resolvedEvent) => {
      return this.reduce(resolvedEvent, subscribeServiceHandler, context, subscription, type);
    });
  }

  private async reduce(
    resolvedEvent: ResolvedEvent,
    subscribeServiceHandler: Map<string, any>,
    context: any,
    subscription: PersistentSubscription,
    type: `command` | `event`
  ) {
    const { event, link } = resolvedEvent;
    if (!event) {
      console.log(`No event`);
      return;
    }

    if (!event.isJson) {
      console.log(`Not JSON Event`);
      return;
    }

    if (this.isTimeout(event, 5_000)) {
      console.log(`Command Timeout`);
      if (type == `command`) {
        return subscription.nack('skip', 'Command Timeout', event.id);
      }

      return subscription.nack('skip', 'Command Timeout', link.id);
    }

    const handler = subscribeServiceHandler.get(event.type);

    if (!handler) {
      console.log(
        `No handler found for ${JSON.stringify(
          { ...event, revision: Number(event.revision) },
          null,
          2,
        )}`,
      );
      if (type == `command`) {
        return subscription.nack('skip', 'No handler', event.id);
      }

      return subscription.nack('skip', 'No handler', link.id);
    }

    try {

      await handler.call(context, event);
      if (type == `command`) {
        return subscription.ack(event.id);
      }
      return subscription.ack(link.id);
    } catch (error) {
      console.log(
        `Command Subscription Error: ${error.message} ${JSON.stringify(
          { ...event, revision: Number(event.revision) },
          null,
          2,
        )}`,
      );
      if (type == `command`) {
        return subscription.nack('skip', error.message, event.id);
      }
      return subscription.nack('skip', error.message, event.id);
    }
  }
}
