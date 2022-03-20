import { EventMetadata, IBaseEvent } from '@app/eventstore/event';

export class StoreSeerReviewPointUpdatedEventData {
  id: string
  review_point: number

}

export class StoreSeerReviewPointUpdatedEvent implements IBaseEvent<StoreSeerReviewPointUpdatedEventData>{
  data: StoreSeerReviewPointUpdatedEventData;
  id: string;
  metadata: EventMetadata;
  type: string;

  constructor(payload: Partial<StoreSeerReviewPointUpdatedEvent>) {
    Object.assign(this, { ...payload, type: `storeSeer.reviewPointUpdated` })
  }
}
