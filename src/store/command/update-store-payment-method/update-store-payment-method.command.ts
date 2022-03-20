import { PaymentMethodInput } from '../../input/store.input';

export class UpdateStoreSeerPaymentMethodCommand{
    id: string;
    payment_method: PaymentMethodInput;
    payment_method_id: string;
    store_id: string;
    correlationId: string

    constructor(payload: UpdateStoreSeerPaymentMethodCommand) {
        Object.assign(this, payload)
    }
}
