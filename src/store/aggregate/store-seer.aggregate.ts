import { StoreSeerAggregateInterface } from './store-seer.aggregate.interface';
import { StoreSeerCreatedEvent } from '../event/store-created.event';
import { StoreSeerUpdatedEvent } from '../event/store-updated.event';
import { StoreSeerPaymentMethodRejectedEvent } from '../event/store-payment-method-rejected.event';
import { StoreSeerPaymentMethodApprovedEvent } from '../event/store-payment-method-approved.event';
import { StoreSeerRecommendUpdatedEvent } from '../event/store-recommend-updated.event';
import { StoreSeerPaymentMethodUpdatedEvent } from '../event/store-payment-method-updated.event';
import { StoreSeerState } from './store-seer.state';
import { StoreSeerReviewPointUpdatedEvent } from '../event/store-review-point-updated.event';
import {
  IPayment_method,
  PaymentMethodStatus,
} from '../../../interface/store/payment-method';
import { IContact } from '../../../interface/store/contact';
import { IProfile } from '../../../interface/store/profile';
import { StoreSeerPaymentMethodAddedEvent } from '../event/store-payment-method-added.event';
import { StoreSeerPaymentMethodRemovedEvent } from '../event/store-payment-method-removed.event';
import { PaymentMethodInput } from '../input/store.input';
import { StoreSeerActiveUpdatedEvent } from '../event/store-active-updated.event';
import { StoreSeerPaymentMethodResubmittedEvent } from '../event/store-payment-method-resubmitted.event';
import { StoreSeerPaymentMethodForceUpdatedEvent } from '../event/store-payment-method-force-updated.event';
import { RootAggregate } from 'src/base/aggregate/base.aggregate';
import { v4 as uuid } from 'uuid';
import { IVideo } from '../../../interface/store/video';


export class StoreSeerAggregate
  extends RootAggregate<StoreSeerState>
  implements StoreSeerAggregateInterface
{
  revision: BigInt | 'no_stream';
  state: StoreSeerState;
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

  createStoreSeer(
    correlationId: string,
    contract: IContact,
    profile: IProfile,
    owner: string,
    payment_method: PaymentMethodInput[],
    shipping_method: string,
    active: boolean,
    video: IVideo[]
  ): StoreSeerAggregate {
    this.apply(
      new StoreSeerCreatedEvent({
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

  updateStoreSeerRecommend(
    correlationId: string,
    recommend: boolean,
  ): StoreSeerAggregate {
    this.apply(
      new StoreSeerRecommendUpdatedEvent({
        data: { id: this.stream, recommended: recommend },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  updateStoreSeer(
    correlationId: string,
    profile: IProfile,
    contact: IContact,
    shipping_method: string,
    video: IVideo[]
  ): StoreSeerAggregate {
    this.apply(
      new StoreSeerUpdatedEvent({
        data: { id: this.stream, profile, contact, shipping_method, video },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  updateReviewPoint(
    correlationId: string,
    review_point: number,
  ): StoreSeerAggregate {
    this.apply(
      new StoreSeerReviewPointUpdatedEvent({
        data: { id: this.stream, review_point },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  addStoreSeerPaymentMethod(
    correlationId: string,
    payment_method: PaymentMethodInput,
  ): StoreSeerAggregate {
    this.apply(
      new StoreSeerPaymentMethodAddedEvent({
        data: { id: this.stream, payment_method: {...payment_method, id: uuid()} },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  approveStoreSeerPaymentMethod(
    correlationId: string,
    approve_by: string,
    payment_method_id: string,
  ): StoreSeerAggregate {
    this.apply(
      new StoreSeerPaymentMethodApprovedEvent({
        data: { id: this.stream, approve_by, payment_method_id },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  rejectStoreSeerPaymentMethod(
    correlationId: string,
    reject_by: string,
    reason: string,
    payment_method_id: string,
  ): StoreSeerAggregate {
    this.apply(
      new StoreSeerPaymentMethodRejectedEvent({
        data: { id: this.stream, reject_by, reason, payment_method_id },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  updateActive(active: boolean, correlationId: string) {
    this.apply(
      new StoreSeerActiveUpdatedEvent({
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

  updateStoreSeerPaymentMethod(
    correlationId: string,
    payment_method: PaymentMethodInput,
    payment_method_id: string,
  ): StoreSeerAggregate {
    this.apply(
      new StoreSeerPaymentMethodUpdatedEvent({
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

  forceUpdateStoreSeerPaymentMethod(
    correlationId: string,
    payment_method: PaymentMethodInput,
    payment_method_id: string,
  ): StoreSeerAggregate {
    this.apply(
      new StoreSeerPaymentMethodForceUpdatedEvent({
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

  removeStoreSeerPaymentMethod(
    correlationId: string,
    payment_method_id: string,
  ): StoreSeerAggregate {
    this.apply(
      new StoreSeerPaymentMethodRemovedEvent({
        data: { id: this.stream, payment_method_id },
        metadata: { $correlationId: correlationId, timestamp: Date.now() },
      }),
    );
    return this;
  }

  resubmitStoreSeerPaymentMethod(
    correlationId: string,
    payment_method: PaymentMethodInput,
    payment_method_id: string,
  ): StoreSeerAggregate {
    this.apply(
      new StoreSeerPaymentMethodResubmittedEvent({
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

  ['onstore.created'](event: StoreSeerCreatedEvent): void {
    this.state = new StoreSeerState({
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

  ['onstore.paymentMethodAdded'](event: StoreSeerPaymentMethodAddedEvent): void {
    const { payment_method } = event.data;
    this.state.payment_method.push({
      ...payment_method,
      status: PaymentMethodStatus.PENDING,
    });
  }

  ['onstore.paymentMethodRemoved'](
    event: StoreSeerPaymentMethodRemovedEvent,
  ): void {
    const { payment_method_id } = event.data;

    const index = this.state.payment_method.findIndex(
      (data) => data.id == payment_method_id,
    );
    this.state.payment_method.splice(index, 1);
  }

  ['onstore.paymentMethodUpdated'](
    event: StoreSeerPaymentMethodUpdatedEvent,
  ): void {
    const index = this.state.payment_method.findIndex(
      (data) => data.id == event.data.payment_method.id,
    );
    this.state.payment_method[index] = event.data.payment_method;
    this.state.payment_method[index].status =
      PaymentMethodStatus.PENDING_UPDATE_APPROVAL;
  }

  ['onstore.paymentMethodForceUpdated'](
    event: StoreSeerPaymentMethodForceUpdatedEvent,
  ): void {
    const index = this.state.payment_method.findIndex(
      (data) => data.id == event.data.payment_method.id,
    );
    this.state.payment_method[index] = event.data.payment_method;
  }

  ['onstore.paymentMethodResubmitted'](
    event: StoreSeerPaymentMethodResubmittedEvent,
  ): void {
    const index = this.state.payment_method.findIndex(
      (data) => data.id == event.data.payment_method.id,
    );
    this.state.payment_method[index] = event.data.payment_method;
    this.state.payment_method[index].status = PaymentMethodStatus.RESUBMIT;
  }

  ['onstore.paymentMethodApproved'](
    event: StoreSeerPaymentMethodApprovedEvent,
  ): void {
    const index = this.state.payment_method.findIndex(
      (data) => data.id == event.data.payment_method_id,
    );
    this.state.payment_method[index].status = PaymentMethodStatus.APPROVE;
  }

  ['onstore.paymentMethodRejected'](
    event: StoreSeerPaymentMethodRejectedEvent,
  ): void {
    const index = this.state.payment_method.findIndex(
      (data) => data.id == event.data.payment_method_id,
    );
    this.state.payment_method[index].status = PaymentMethodStatus.REJECT;
  }

  ['onstore.recommendUpdated'](event: StoreSeerRecommendUpdatedEvent): void {
    const { recommended } = event.data;
    this.state.recommended = recommended;
  }

  ['onstore.updated'](event: StoreSeerUpdatedEvent): void {
    const { profile, contact: contract, video } = event.data;
    this.state.profile = profile;
    this.state.contact = contract;
    this.state.video = video
  }

  ['store.reviewPointUpdated'](event: StoreSeerReviewPointUpdatedEvent): void {
    const { review_point } = event.data;
    this.state.review_point = review_point;
  }
}
