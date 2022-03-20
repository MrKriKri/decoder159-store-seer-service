import { IUpdate_review_point_command } from '../../../../interface/store-command/update-review-point-command';

export class UpdateReviewPointCommand implements IUpdate_review_point_command{
  id: string;
  review_point: number;
  store_id: string;
  correlationId: string

  constructor(payload: UpdateReviewPointCommand) {
    Object.assign(this, payload)
  }
}
