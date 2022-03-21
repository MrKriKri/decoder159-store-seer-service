import { IBaseEvent, EventMetadata } from "@app/eventstore/event";

export interface SeerStoreRecommendUpdatedEventData {
    recommended: boolean;
    id: string;
}

export class SeerStoreRecommendUpdatedEvent implements IBaseEvent<SeerStoreRecommendUpdatedEventData>{
    id: string;
    data: SeerStoreRecommendUpdatedEventData;
    metadata: EventMetadata;
    type: string

    constructor(payload: Partial<SeerStoreRecommendUpdatedEvent>) {
        Object.assign(this, { ...payload, type: `seerStore.recommendUpdated` })
    }
}
