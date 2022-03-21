import { PaymentMethodInput } from '../../input/seer-store.input';

export class UpdateSeerStorePaymentMethodCommand{
    id: string;
    payment_method: PaymentMethodInput;
    payment_method_id: string;
    store_id: string;
    correlationId: string

    constructor(payload: UpdateSeerStorePaymentMethodCommand) {
        Object.assign(this, payload)
    }
}
