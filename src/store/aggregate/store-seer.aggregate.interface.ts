import { StoreSeerAggregate } from "./store-seer.aggregate";
import { StoreSeerCreatedEvent } from "../event/store-created.event";
import { StoreSeerPaymentMethodApprovedEvent } from "../event/store-payment-method-approved.event";
import { StoreSeerPaymentMethodRejectedEvent } from "../event/store-payment-method-rejected.event";
import { StoreSeerRecommendUpdatedEvent } from "../event/store-recommend-updated.event";
import { StoreSeerUpdatedEvent } from "../event/store-updated.event";
import { StoreSeerState } from './store-seer.state';

export interface StoreSeerAggregateInterface {
    stream: string
    state: StoreSeerState
    revision: BigInt | "no_stream"

    // approveStoreSeerPaymentMethod(approve_by: string, payment_method_id: string): StoreSeerAggregate
    // authorizeStoreSeerOwner(authorize_by: string): StoreSeerAggregate
    // createStoreSeer(address: IAddress, contract: IContract, id_card_url: string, payment_method: IPayment_method[], user_id: string): StoreSeerAggregate
    // rejectStoreSeerPaymentMethod(reject_by: string, reason: string, payment_method_id: string): StoreSeerAggregate
    // unauthorizeStoreSeerOwner(unauthorize_by: string, reason: string): StoreSeerAggregate
    // updateStoreSeer(profile: IProfile, contract: IContract): StoreSeerAggregate
    // updateStoreSeerPaymentMethod(payment_method: IPayment_method[]): StoreSeerAggregate
    // updateStoreSeerRecommend(recommend: boolean): StoreSeerAggregate

    // onStoreSeerCreatedEvent(event: StoreSeerCreatedEvent): void
    // onStoreSeerOwnerAuthorizedEvent(event: StoreSeerOwnerAuthorizedEvent): void
    // onStoreSeerOwnerUnAuthorizedEvent(event: StoreSeerOwnerUnauthorizedEvent): void
    // onStoreSeerPaymentMethodApprovedEvent(event: StoreSeerPaymentMethodApprovedEvent): void
    // onStoreSeerPaymentMethodRejectedEvent(event: StoreSeerPaymentMethodRejectedEvent): void
    // onStoreSeerRecommendUpdatedEvent(event: StoreSeerRecommendUpdatedEvent): void
    // onStoreSeerUpdatedEvent(event: StoreSeerUpdatedEvent): void

}
