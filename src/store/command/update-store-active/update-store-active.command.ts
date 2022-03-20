export class UpdateStoreSeerActiveCommand {
  store_id: string;
  active: boolean;
  correlationId: string;

  /**
   *
   */
  constructor(payload: UpdateStoreSeerActiveCommand) {
    Object.assign(this, payload);
  }
}
