import { EventMetadata, IBaseEvent } from '@app/eventstore/event';

export class SeerStoreReviewPointUpdatedEventData {
  id: string
  review_point: number

}

export class SeerStoreReviewPointUpdatedEvent implements IBaseEvent<SeerStoreReviewPointUpdatedEventData>{
  data: SeerStoreReviewPointUpdatedEventData;
  id: string;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<SeerStoreReviewPointUpdatedEvent>) {
    Object.assign(this, { ...payload, type: `seerStore.reviewPointUpdated` })
  }
}
