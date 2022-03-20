import { IBaseEvent, EventMetadata } from "@app/eventstore/event";

export interface StoreSeerRecommendUpdatedEventData {
    recommended: boolean;
    id: string;
}

export class StoreSeerRecommendUpdatedEvent implements IBaseEvent<StoreSeerRecommendUpdatedEventData>{
    id: string;
    data: StoreSeerRecommendUpdatedEventData;
    metadata: EventMetadata;
    type: string

    constructor(payload: Partial<StoreSeerRecommendUpdatedEvent>) {
        Object.assign(this, { ...payload, type: `storeSeer.recommendUpdated` })
    }
}
