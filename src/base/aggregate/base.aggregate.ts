import { AggregateRoot } from '@nestjs/cqrs';
import {IBaseEvent} from "@app/eventstore/event";

export abstract class RootAggregate<T> extends AggregateRoot<IBaseEvent> {
  stream: string;
  state: T;
  revision: BigInt | 'no_stream';


  protected getEventName(event: any): string {
    return event.type
  }
}
