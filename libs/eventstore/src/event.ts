import { IEvent } from '@nestjs/cqrs';

export interface IBaseEvent<T = any> extends IEvent {
  id: string;
  type: string;
  data: T;
  metadata: EventMetadata;
}

export interface IWriteEvent extends IBaseEvent {}

// export interface IReadEvent extends IBaseEvent {
//     /**
//      * Indicates whether the content is internally marked as JSON.
//      */
//     isJson: true;
//     /**
//      * Data of this event.
//      */
//     data: E["data"];
//     /**
//      * The event stream that events belongs to.
//      */
//     streamId: string;
//     /**
//      * Unique identifier representing this event. UUID format.
//      */
//     id: string;
//     /**
//      * Number of this event in the stream.
//      */
//     revision: bigint;
//     /**
//      * Type of this event.
//      */
//     type: E["type"];
//     /**
//      * Representing when this event was created in the database system.
//      */
//     created: number;
//     /**
//      * Representing the metadata associated with this event.
//      */
//     metadata: E["metadata"] extends MetadataType ? E["metadata"] : MetadataType | undefined;
// }

export class EventMetadata {
  version?: number;
  timestamp: number;
  $correlationId: string;
  causedBy?: string;

  constructor(payload: EventMetadata) {
    Object.assign(payload, this);
  }
}

export abstract class BaseEvent<T> implements IBaseEvent<T> {
  id: string;
  type: string;
  data: T;
  metadata: EventMetadata;

  constructor(payload: BaseEvent<T>) {
    Object.assign(payload, this);
  }
}

export abstract class ErrorEvent<T> implements IBaseEvent<T> {
  id: string;
  type: string;
  data: T;
  metadata: EventMetadata;

  constructor(payload: ErrorEvent<T>) {
    Object.assign(payload, this);
  }
}

export abstract class ExceptionEvent<T> implements IBaseEvent<T> {
  id: string;
  type: string;
  data: T;
  metadata: EventMetadata;

  constructor(payload: ExceptionEvent<T>) {
    Object.assign(payload, this);
  }
}

export class RuntimeErrorData {
  message: string;
  code: string;
}
export class RuntimeError implements IBaseEvent<RuntimeErrorData> {
  id: string;
  data: RuntimeErrorData;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<RuntimeError>) {
    Object.assign(this, { ...payload, type: `runtime.error` });
  }
}
