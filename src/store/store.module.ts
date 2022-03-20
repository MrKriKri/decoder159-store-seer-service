import { Module, OnModuleInit } from '@nestjs/common';
import { CommandHandler } from './command';
import { StoreSeerRepository } from './repository/store-seer.repository';
import { EventstoreService } from '@app/eventstore';
import { CommandSubscriptionService } from '../command-subscription/command-subscription.service';
import { readFile } from 'fs/promises';
import { StoreSeerCreatedEvent } from './event/store-created.event';
import { UpdateStoreSeerRecommendCommand } from './command/update-store-recommend/update-store-recommend.command';
import { ApproveStoreSeerPaymentMethodCommand } from './command/approve-store-payment-method/approve-store-payment-method.command';
import { RejectStoreSeerPaymentMethodCommand } from './command/reject-store-payment-mthod/reject-store-payment-method.command';
import { UpdateStoreSeerPaymentMethodCommand } from './command/update-store-payment-method/update-store-payment-method.command';
import { UpdateReviewPointCommand } from './command/update-review-point/update-review-point.command';
import { CommandBus, CqrsModule } from '@nestjs/cqrs';
import { jsonEvent } from '@eventstore/db-client';
import { AddStoreSeerPaymentMethodCommand } from './command/add-store-payment-method/add-store-payment-method.command';
import { RemoveStoreSeerPaymentMethodCommand } from './command/remove-store-payment-method/remove-store-payment-method.command';
import { IBaseEvent } from '@app/eventstore/event';
import { UpdateStoreSeerActiveCommand } from './command/update-store-active/update-store-active.command';
import { ResubmitStoreSeerPaymentMethodCommand } from './command/resubmit-store-paymen-method/resubmit-store-payment-method.command';
import { StoreSeerActiveUpdatedEvent } from './event/store-active-updated.event';
import { EventHandlers } from './handler';
import { ForceUpdateStoreSeerPaymentMethodCommand } from './command/force-update-store-payment-method/force-update-store-payment-method.command';
import { config } from '../../config';
import {CreateStoreSeerCommand} from "./command/create-store/create-store.command";
import {UpdateStoreSeerCommand} from "./command/update-store/update-store.command";

@Module({
  imports: [
    CqrsModule,
  ],
  providers: [
    ...CommandHandler,
    StoreSeerRepository,
    ...EventHandlers,
  ],
})
export class StoreSeerModule implements OnModuleInit {
  constructor(
    private readonly commandSubscribe: CommandSubscriptionService,
    private readonly eventstore: EventstoreService,
    private readonly commandBus: CommandBus,
  ) {}

  private commandHandler: Map<string, any> = new Map();
  private eventHandler: Map<string, any> = new Map();

  async onModuleInit() {
    const cert = await readFile(process.cwd() + '/src/ca.crt');

    this.eventstore.connect(
      { endpoint: config.es.endpoint },
      { insecure: false, rootCertificate: cert },
      { username: config.es.username, password: config.es.password },
    );

    this.regisHandler();
  }

  regisHandler() {
    this.eventHandler.set('storeSeer.created', this.onStoreSeerCreatedEvent);

    this.commandHandler.set('storeSeer.create', this.onCreateStoreSeerCommand);
    this.commandHandler.set('storeSeer.update', this.onUpdateStoreSeerCommand);
    this.commandHandler.set(
      'storeSeer.forceUpdateStoreSeerPaymentMethod',
      this.onForceUpdateStoreSeerPaymentMethodCommand,
    );
    this.commandHandler.set(
      'storeSeer.updateRecommend',
      this.onUpdateStoreSeerRecommendCommand,
    );
    this.commandHandler.set(
      'storeSeer.approvePaymentMethod',
      this.onApproveStoreSeerPaymentMethodCommand,
    );
    this.commandHandler.set(
      'storeSeer.rejectPaymentMethod',
      this.onRejectStoreSeerPaymentMethodCommand,
    );
    this.commandHandler.set(
      'storeSeer.updatePaymentMethod',
      this.onUpdateStoreSeerPaymentMethodCommand,
    );

    this.commandHandler.set(
      'storeSeer.resubmitPaymentMethod',
      this.onResubmitStoreSeerPaymentMethodCommand,
    );
    this.commandHandler.set(
      'storeSeer.updateReviewPoint',
      this.onUpdateReviewPointCommand,
    );
    this.commandHandler.set(
      'storeSeer.addPaymentMethod',
      this.onAddStoreSeerPaymentMethodCommand,
    );
    this.commandHandler.set(
      'storeSeer.removePaymentMethod',
      this.onRemoveStoreSeerPaymentMethodCommand,
    );
    this.commandHandler.set(
      'storeSeer.updateActive',
      this.onUpdateStoreSeerActiveCommand,
    );

    this.commandSubscribe.start(
      `$ce-store`,
      this.eventHandler,
      this,
      `service-worker-store-event`,
      'event',
    );
    this.commandSubscribe.start(
      `command`,
      this.commandHandler,
      this,
      `service-worker-store-command`,
      'command',
    );
  }

  async onStoreSeerCreatedEvent(event: StoreSeerCreatedEvent) {
    const { id } = event.data;
    const { $correlationId } = event.metadata;
    await this.publishCommand(`inventory.create`, {
      data: { store_id: id, correlationId: $correlationId },
      metadata: { $correlationId: $correlationId, timestamp: Date.now() },
    });
  }

  async onStoreSeerActiveUpdatedEvent(event: StoreSeerActiveUpdatedEvent) {
    const { id } = event.data;
    const { $correlationId } = event.metadata;
    await this.publishCommand(`inventory.create`, {
      data: { store_id: id, correlationId: $correlationId },
      metadata: { $correlationId: $correlationId, timestamp: Date.now() },
    });
  }

  async onCreateStoreSeerCommand(command: IBaseEvent<CreateStoreSeerCommand>) {
    await this.commandBus.execute(new CreateStoreSeerCommand({ ...command.data }));
  }

  async onAddStoreSeerPaymentMethodCommand(
    command: IBaseEvent<AddStoreSeerPaymentMethodCommand>,
  ) {
    await this.commandBus.execute(
      new AddStoreSeerPaymentMethodCommand({ ...command.data }),
    );
  }

  async onRemoveStoreSeerPaymentMethodCommand(
    command: IBaseEvent<RemoveStoreSeerPaymentMethodCommand>,
  ) {
    await this.commandBus.execute(
      new RemoveStoreSeerPaymentMethodCommand({ ...command.data }),
    );
  }

  async onUpdateStoreSeerCommand(command: IBaseEvent<UpdateStoreSeerCommand>) {
    await this.commandBus.execute(new UpdateStoreSeerCommand({ ...command.data }));
  }
  async onUpdateStoreSeerRecommendCommand(
    command: IBaseEvent<UpdateStoreSeerRecommendCommand>,
  ) {
    await this.commandBus.execute(
      new UpdateStoreSeerRecommendCommand({ ...command.data }),
    );
  }
  async onApproveStoreSeerPaymentMethodCommand(
    command: IBaseEvent<ApproveStoreSeerPaymentMethodCommand>,
  ) {
    await this.commandBus.execute(
      new ApproveStoreSeerPaymentMethodCommand({ ...command.data }),
    );
  }
  async onRejectStoreSeerPaymentMethodCommand(
    command: IBaseEvent<RejectStoreSeerPaymentMethodCommand>,
  ) {
    await this.commandBus.execute(
      new RejectStoreSeerPaymentMethodCommand({ ...command.data }),
    );
  }
  async onUpdateStoreSeerPaymentMethodCommand(
    command: IBaseEvent<UpdateStoreSeerPaymentMethodCommand>,
  ) {
    await this.commandBus.execute(
      new UpdateStoreSeerPaymentMethodCommand({ ...command.data }),
    );
  }
  async onUpdateReviewPointCommand(
    command: IBaseEvent<UpdateReviewPointCommand>,
  ) {
    await this.commandBus.execute(
      new UpdateReviewPointCommand({ ...command.data }),
    );
  }

  async onUpdateStoreSeerActiveCommand(
    command: IBaseEvent<UpdateStoreSeerActiveCommand>,
  ) {
    await this.commandBus.execute(
      new UpdateStoreSeerActiveCommand({ ...command.data }),
    );
  }

  async onResubmitStoreSeerPaymentMethodCommand(
    command: IBaseEvent<ResubmitStoreSeerPaymentMethodCommand>,
  ) {
    await this.commandBus.execute(
      new ResubmitStoreSeerPaymentMethodCommand({ ...command.data }),
    );
  }

  async onForceUpdateStoreSeerPaymentMethodCommand(
    command: IBaseEvent<ForceUpdateStoreSeerPaymentMethodCommand>,
  ) {
    await this.commandBus.execute(
      new ForceUpdateStoreSeerPaymentMethodCommand({ ...command.data }),
    );
  }

  async publishCommand(type: string, data: any) {
    await this.eventstore.client.appendToStream(
      'command',
      jsonEvent({
        type,
        metadata: data.metadata,
        data: data.data,
      }),
    );
  }
}
