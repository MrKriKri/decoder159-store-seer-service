import { SeerStoreAggregate } from "./store-seer.aggregate";
import { SeerStoreCreatedEvent } from "../event/seer-store-created.event";
import { SeerStorePaymentMethodApprovedEvent } from "../event/seer-store-payment-method-approved.event";
import { SeerStorePaymentMethodRejectedEvent } from "../event/seer-store-payment-method-rejected.event";
import { SeerStoreRecommendUpdatedEvent } from "../event/seer-store-recommend-updated.event";
import { SeerStoreUpdatedEvent } from "../event/seer-store-updated.event";
import { SeerStoreState } from './store-seer.state';

export interface SeerStoreAggregateInterface {
    stream: string
    state: SeerStoreState
    revision: BigInt | "no_stream"

    // approveSeerStorePaymentMethod(approve_by: string, payment_method_id: string): SeerStoreAggregate
    // authorizeSeerStoreOwner(authorize_by: string): SeerStoreAggregate
    // createSeerStore(address: IAddress, contract: IContract, id_card_url: string, payment_method: IPayment_method[], user_id: string): SeerStoreAggregate
    // rejectSeerStorePaymentMethod(reject_by: string, reason: string, payment_method_id: string): SeerStoreAggregate
    // unauthorizeSeerStoreOwner(unauthorize_by: string, reason: string): SeerStoreAggregate
    // updateSeerStore(profile: IProfile, contract: IContract): SeerStoreAggregate
    // updateSeerStorePaymentMethod(payment_method: IPayment_method[]): SeerStoreAggregate
    // updateSeerStoreRecommend(recommend: boolean): SeerStoreAggregate

    // onSeerStoreCreatedEvent(event: SeerStoreCreatedEvent): void
    // onSeerStoreOwnerAuthorizedEvent(event: SeerStoreOwnerAuthorizedEvent): void
    // onSeerStoreOwnerUnAuthorizedEvent(event: SeerStoreOwnerUnauthorizedEvent): void
    // onSeerStorePaymentMethodApprovedEvent(event: SeerStorePaymentMethodApprovedEvent): void
    // onSeerStorePaymentMethodRejectedEvent(event: SeerStorePaymentMethodRejectedEvent): void
    // onSeerStoreRecommendUpdatedEvent(event: SeerStoreRecommendUpdatedEvent): void
    // onSeerStoreUpdatedEvent(event: SeerStoreUpdatedEvent): void

}
