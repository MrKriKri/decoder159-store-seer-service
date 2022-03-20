import { Injectable } from "@nestjs/common";
import { IEvent, IEventPublisher } from "@nestjs/cqrs";
import { Subject } from "rxjs";
import { EventstoreService } from './eventstore.service';
import { ExpectedRevision } from '@eventstore/db-client';

export class EventstoreWriteBusOptions {
    expectedRevision?: ExpectedRevision
    stream?: string
}

@Injectable()
export class EventstoreWriteBus implements IEventPublisher {
    constructor(
        private readonly eventstore: EventstoreService
    ) {
    }

    publish<T extends IEvent = IEvent>(event: T, options?: EventstoreWriteBusOptions) {
        throw new Error("Method not implemented.");
    }
    publishAll?<T extends IEvent = IEvent>(events: T[]) {
        throw new Error("Method not implemented.");
    }
}