import { IUpdate_store_recommend_command } from '../../../../interface/store-command/update-store-recommend-command';

export class UpdateSeerStoreRecommendCommand implements IUpdate_store_recommend_command {
    id: string;
    recommended: boolean;
    store_id: string;
    correlationId: string;

    constructor(payload: UpdateSeerStoreRecommendCommand) {
        Object.assign(this, payload)
    }
}
