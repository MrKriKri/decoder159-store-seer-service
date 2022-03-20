import { Injectable } from '@nestjs/common';
import {
  Credentials,
  EventStoreSeerDBClient,
  ChannelCredentialOptions,
  EventTypeToRecordedEvent,
  jsonEvent,
} from '@eventstore/db-client';
import { SingleNodeOptions } from '@eventstore/db-client/dist/Client';
import { ReadStreamOptions } from '@eventstore/db-client/dist/streams';
import { ErrorEvent, ExceptionEvent } from './event';

@Injectable()
export class EventstoreService {
  private eventstoreClient: EventStoreSeerDBClient;

  connect(
    connectionSetting: SingleNodeOptions,
    channelCredential: ChannelCredentialOptions,
    defaultUserCredentail: Credentials,
  ) {
    this.eventstoreClient = new EventStoreSeerDBClient(
      connectionSetting,
      channelCredential,
      defaultUserCredentail,
    );

    return this;
  }

  get client() {
    return this.eventstoreClient;
  }

  readStream(id: string, option: ReadStreamOptions): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const dataArray = [];
      this.eventstoreClient
        .readStream(id, option)
        .on('data', (resolvedEvent) => {
          dataArray.push(resolvedEvent);
        })
        .on('end', () => {
          resolve(dataArray);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }
  async publishError<T>(error: ErrorEvent<T>) {
    await this.client.appendToStream(
      'error',
      jsonEvent({
        type: error.type,
        metadata: error.metadata,
        data: error.data as any,
      }),
    );
  }

  async publishException<T>(exception: ExceptionEvent<T>) {
    await this.client.appendToStream(
      'exception',
      jsonEvent({
        type: exception.type,
        metadata: exception.metadata,
        data: exception.data as any,
      }),
    );
  }
}
