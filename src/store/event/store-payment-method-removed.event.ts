import { IBaseEvent, EventMetadata } from "@app/eventstore/event";

export interface StoreSeerPaymentMethodRemovedEventData {
    payment_method_id: string;
    id: string;
}



export class StoreSeerPaymentMethodRemovedEvent implements IBaseEvent<StoreSeerPaymentMethodRemovedEventData>{
    id: string;
    data: StoreSeerPaymentMethodRemovedEventData;
    metadata: EventMetadata;
    type: string

    constructor(payload: Partial<StoreSeerPaymentMethodRemovedEvent>) {
        Object.assign(this, { ...payload, type: `storeSeer.paymentMethodRemoved` })
    }
}
