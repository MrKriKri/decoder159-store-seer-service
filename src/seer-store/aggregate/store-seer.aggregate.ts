import { SeerStoreAggregateInterface } from './store-seer.aggregate.interface';
import { SeerStoreCreatedEvent } from '../event/seer-store-created.event';
import { SeerStoreUpdatedEvent } from '../event/seer-store-updated.event';
import { SeerStorePaymentMethodRejectedEvent } from '../event/seer-store-payment-method-rejected.event';
import { SeerStorePaymentMethodApprovedEvent } from '../event/seer-store-payment-method-approved.event';
import { SeerStoreRecommendUpdatedEvent } from '../event/seer-store-recommend-updated.event';
import { SeerStorePaymentMethodUpdatedEvent } from '../event/seer-store-payment-method-updated.event';
import { SeerStoreState } from './store-seer.state';
import { SeerStoreReviewPointUpdatedEvent } from '../event/seer-store-review-point-updated.event';
import {
  IPayment_method,
  PaymentMethodStatus,
} from '../../../interface/store/payment-method';
import { IContact } from '../../../interface/store/contact';
import { IProfile } from '../../../interface/store/profile';
import { SeerStorePaymentMethodAddedEvent } from '../event/seer-store-payment-method-added.event';
import { SeerStorePaymentMethodRemovedEvent } from '../event/seer-store-payment-method-removed.event';
import { PaymentMethodInput } from '../input/seer-store.input';
import { SeerStoreActiveUpdatedEvent } from '../event/seer-store-active-updated.event';
import { SeerStorePaymentMethodResubmittedEvent } from '../event/seer-store-payment-method-resubmitted.event';
import { SeerStorePaymentMethodForceUpdatedEvent } from '../event/seer-store-payment-method-force-updated.event';
import { RootAggregate } from 'src/base/aggregate/base.aggregate';
import { v4 as uuid } from 'uuid';
import { IVideo } from '../../../interface/store/video';


export class SeerStoreAggregate
  extends RootAggregate<SeerStoreState>
  implements SeerStoreAggregateInterface
{
  revision: BigInt | 'no_stream';
  state: SeerStoreState;
  stream: string;

  protected getEventName(event: any): string {
    return event.type;
  }

  protected getEventHandler(event: any) {
    const handler = `on${this.getEventName(event)}`;
    return this[handler];
  }

  isPaymentMethodExists(id: string) {
    return !!this.getPaymentMethod(id);
  }

  getPaymentMethod(id: string) {
    return this.state.payment_method.find((x) => x.id === id);
  }

  createSeerStore(
    correlationId: string,
    contract: IContact,
    profile: IProfile,
    owner: string,
    payment_method: PaymentMethodInput[],
    shipping_method: string,
    active: boolean,
    video: IVideo[]
  ): SeerStoreAggregate {
    this.apply(
      new SeerStoreCreatedEvent({
        data: {
          id: this.stream,
          contact: contract,
          payment_method: payment_method.map((pay) => ({
            ...pay,
            id: uuid(),
            status: PaymentMethodStatus.APPROVE,
          })),
          shipping_method,
          owner,
          profile,
          active,
          video
        },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  updateSeerStoreRecommend(
    correlationId: string,
    recommend: boolean,
  ): SeerStoreAggregate {
    this.apply(
      new SeerStoreRecommendUpdatedEvent({
        data: { id: this.stream, recommended: recommend },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  updateSeerStore(
    correlationId: string,
    profile: IProfile,
    contact: IContact,
    shipping_method: string,
    video: IVideo[]
  ): SeerStoreAggregate {
    this.apply(
      new SeerStoreUpdatedEvent({
        data: { id: this.stream, profile, contact, shipping_method, video },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  updateReviewPoint(
    correlationId: string,
    review_point: number,
  ): SeerStoreAggregate {
    this.apply(
      new SeerStoreReviewPointUpdatedEvent({
        data: { id: this.stream, review_point },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  addSeerStorePaymentMethod(
    correlationId: string,
    payment_method: PaymentMethodInput,
  ): SeerStoreAggregate {
    this.apply(
      new SeerStorePaymentMethodAddedEvent({
        data: { id: this.stream, payment_method: {...payment_method, id: uuid()} },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  approveSeerStorePaymentMethod(
    correlationId: string,
    approve_by: string,
    payment_method_id: string,
  ): SeerStoreAggregate {
    this.apply(
      new SeerStorePaymentMethodApprovedEvent({
        data: { id: this.stream, approve_by, payment_method_id },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  rejectSeerStorePaymentMethod(
    correlationId: string,
    reject_by: string,
    reason: string,
    payment_method_id: string,
  ): SeerStoreAggregate {
    this.apply(
      new SeerStorePaymentMethodRejectedEvent({
        data: { id: this.stream, reject_by, reason, payment_method_id },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  updateActive(active: boolean, correlationId: string) {
    this.apply(
      new SeerStoreActiveUpdatedEvent({
        data: {
          id: this.stream,
          active,
        },
        metadata: {
          timestamp: Date.now(),
          $correlationId: correlationId,
        },
      }),
    );
  }

  updateSeerStorePaymentMethod(
    correlationId: string,
    payment_method: PaymentMethodInput,
    payment_method_id: string,
  ): SeerStoreAggregate {
    this.apply(
      new SeerStorePaymentMethodUpdatedEvent({
        data: {
          id: this.stream,
          payment_method: {
            ...payment_method,
            id: payment_method_id,
          },
        },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  forceUpdateSeerStorePaymentMethod(
    correlationId: string,
    payment_method: PaymentMethodInput,
    payment_method_id: string,
  ): SeerStoreAggregate {
    this.apply(
      new SeerStorePaymentMethodForceUpdatedEvent({
        data: {
          id: this.stream,
          payment_method: {
            ...payment_method,
            id: payment_method_id,
          },
        },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  removeSeerStorePaymentMethod(
    correlationId: string,
    payment_method_id: string,
  ): SeerStoreAggregate {
    this.apply(
      new SeerStorePaymentMethodRemovedEvent({
        data: { id: this.stream, payment_method_id },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  resubmitSeerStorePaymentMethod(
    correlationId: string,
    payment_method: PaymentMethodInput,
    payment_method_id: string,
  ): SeerStoreAggregate {
    this.apply(
      new SeerStorePaymentMethodResubmittedEvent({
        data: {
          id: this.stream,
          payment_method: {
            ...payment_method,
            id: payment_method_id,
          },
        },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  ['onstore.created'](event: SeerStoreCreatedEvent): void {
    this.state = new SeerStoreState({
      ...event.data,
      review_point: 0,
      recommended: false,
      active: event.data.active,
      video: !Array.isArray(event.data.video)
        ? [event.data.video as unknown as IVideo]
        : event.data.video,
      payment_method: !Array.isArray(event.data.payment_method)
        ? [event.data.payment_method as unknown as IPayment_method]
        : event.data.payment_method,
    });
  }

  ['onstore.paymentMethodAdded'](event: SeerStorePaymentMethodAddedEvent): void {
    const { payment_method } = event.data;
    this.state.payment_method.push({
      ...payment_method,
      status: PaymentMethodStatus.PENDING,
    });
  }

  ['onstore.paymentMethodRemoved'](
    event: SeerStorePaymentMethodRemovedEvent,
  ): void {
    const { payment_method_id } = event.data;

    const index = this.state.payment_method.findIndex(
      (data) => data.id == payment_method_id,
    );
    this.state.payment_method.splice(index, 1);
  }

  ['onstore.paymentMethodUpdated'](
    event: SeerStorePaymentMethodUpdatedEvent,
  ): void {
    const index = this.state.payment_method.findIndex(
      (data) => data.id == event.data.payment_method.id,
    );
    this.state.payment_method[index] = event.data.payment_method;
    this.state.payment_method[index].status =
      PaymentMethodStatus.PENDING_UPDATE_APPROVAL;
  }

  ['onstore.paymentMethodForceUpdated'](
    event: SeerStorePaymentMethodForceUpdatedEvent,
  ): void {
    const index = this.state.payment_method.findIndex(
      (data) => data.id == event.data.payment_method.id,
    );
    this.state.payment_method[index] = event.data.payment_method;
  }

  ['onstore.paymentMethodResubmitted'](
    event: SeerStorePaymentMethodResubmittedEvent,
  ): void {
    const index = this.state.payment_method.findIndex(
      (data) => data.id == event.data.payment_method.id,
    );
    this.state.payment_method[index] = event.data.payment_method;
    this.state.payment_method[index].status = PaymentMethodStatus.RESUBMIT;
  }

  ['onstore.paymentMethodApproved'](
    event: SeerStorePaymentMethodApprovedEvent,
  ): void {
    const index = this.state.payment_method.findIndex(
      (data) => data.id == event.data.payment_method_id,
    );
    this.state.payment_method[index].status = PaymentMethodStatus.APPROVE;
  }

  ['onstore.paymentMethodRejected'](
    event: SeerStorePaymentMethodRejectedEvent,
  ): void {
    const index = this.state.payment_method.findIndex(
      (data) => data.id == event.data.payment_method_id,
    );
    this.state.payment_method[index].status = PaymentMethodStatus.REJECT;
  }

  ['onstore.recommendUpdated'](event: SeerStoreRecommendUpdatedEvent): void {
    const { recommended } = event.data;
    this.state.recommended = recommended;
  }

  ['onstore.updated'](event: SeerStoreUpdatedEvent): void {
    const { profile, contact: contract, video } = event.data;
    this.state.profile = profile;
    this.state.contact = contract;
    this.state.video = video
  }

  ['store.reviewPointUpdated'](event: SeerStoreReviewPointUpdatedEvent): void {
    const { review_point } = event.data;
    this.state.review_point = review_point;
  }
}
