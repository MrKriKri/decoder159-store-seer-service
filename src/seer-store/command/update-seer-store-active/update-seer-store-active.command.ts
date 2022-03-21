export class UpdateSeerStoreActiveCommand {
  store_id: string;
  active: boolean;
  correlationId: string;

  /**
   *
   */
  constructor(payload: UpdateSeerStoreActiveCommand) {
    Object.assign(this, payload);
  }
}
