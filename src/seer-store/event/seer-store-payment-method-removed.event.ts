import { IBaseEvent, EventMetadata } from "@app/eventstore/event";

export interface SeerStorePaymentMethodRemovedEventData {
    payment_method_id: string;
    id: string;
}



export class SeerStorePaymentMethodRemovedEvent implements IBaseEvent<SeerStorePaymentMethodRemovedEventData>{
    id: string;
    data: SeerStorePaymentMethodRemovedEventData;
    metadata: EventMetadata;
    type: string

    constructor(payload: Partial<SeerStorePaymentMethodRemovedEvent>) {
        Object.assign(this, { ...payload, type: `seerStore.paymentMethodRemoved` })
    }
}
