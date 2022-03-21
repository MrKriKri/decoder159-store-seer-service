import { Module, OnModuleInit } from '@nestjs/common';
import { CommandHandler } from './command';
import { SeerStoreRepository } from './repository/store-seer.repository';
import { EventstoreService } from '@app/eventstore';
import { CommandSubscriptionService } from '../command-subscription/command-subscription.service';
import { readFile } from 'fs/promises';
import { SeerStoreCreatedEvent } from './event/seer-store-created.event';
import { UpdateReviewPointCommand } from './command/update-review-point/update-review-point.command';
import { CommandBus, CqrsModule } from '@nestjs/cqrs';
import { jsonEvent } from '@eventstore/db-client';
import { IBaseEvent } from '@app/eventstore/event';
import { config } from '../../config';
import {RemoveSeerStorePaymentMethodCommand} from "./command/remove-seer-store-payment-method/remove-seer-store-payment-method.command";
import {AddSeerStorePaymentMethodCommand} from "./command/add-seer-store-payment-method/add-seer-store-payment-method.command";
import {CreateSeerStoreCommand} from "./command/create-seer-store/create-seer-store.command";
import {ForceUpdateSeerStorePaymentMethodCommand} from "./command/force-update-seer-store-payment-method/force-update-seer-store-payment-method.command";
import {ResubmitSeerStorePaymentMethodCommand} from "./command/resubmit-seer-store-paymen-method/resubmit-seer-store-payment-method.command";
import {UpdateSeerStoreActiveCommand} from "./command/update-seer-store-active/update-seer-store-active.command";
import {UpdateSeerStoreRecommendCommand} from "./command/update-seer-store-recommend/update-seer-store-recommend.command";
import {UpdateSeerStoreCommand} from "./command/update-seer-store/update-seer-store.command";
import {ApproveSeerStorePaymentMethodCommand} from "./command/approve-seer-store-payment-method/approve-seer-store-payment-method.command";
import {RejectSeerStorePaymentMethodCommand} from "./command/reject-seer-store-payment-mthod/reject-seer-store-payment-method.command";
import {UpdateSeerStorePaymentMethodCommand} from "./command/update-seer-store-payment-method/update-seer-store-payment-method.command";

@Module({
  imports: [
    CqrsModule,
  ],
  providers: [
    ...CommandHandler,
    SeerStoreRepository,
  ],
})
export class SeerStoreModule implements OnModuleInit {
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
    this.eventHandler.set('seerStore.created', this.onSeerStoreCreatedEvent);

    this.commandHandler.set('seerStore.create', this.onCreateSeerStoreCommand);
    this.commandHandler.set('seerStore.update', this.onUpdateSeerStoreCommand);
    this.commandHandler.set(
      'seerStore.forceUpdateSeerStorePaymentMethod',
      this.onForceUpdateSeerStorePaymentMethodCommand,
    );
    this.commandHandler.set(
      'seerStore.updateRecommend',
      this.onUpdateSeerStoreRecommendCommand,
    );
    this.commandHandler.set(
      'seerStore.approvePaymentMethod',
      this.onApproveSeerStorePaymentMethodCommand,
    );
    this.commandHandler.set(
      'seerStore.rejectPaymentMethod',
      this.onRejectSeerStorePaymentMethodCommand,
    );
    this.commandHandler.set(
      'seerStore.updatePaymentMethod',
      this.onUpdateSeerStorePaymentMethodCommand,
    );

    this.commandHandler.set(
      'seerStore.resubmitPaymentMethod',
      this.onResubmitSeerStorePaymentMethodCommand,
    );
    this.commandHandler.set(
      'seerStore.updateReviewPoint',
      this.onUpdateReviewPointCommand,
    );
    this.commandHandler.set(
      'seerStore.addPaymentMethod',
      this.onAddSeerStorePaymentMethodCommand,
    );
    this.commandHandler.set(
      'seerStore.removePaymentMethod',
      this.onRemoveSeerStorePaymentMethodCommand,
    );
    this.commandHandler.set(
      'seerStore.updateActive',
      this.onUpdateSeerStoreActiveCommand,
    );

    this.commandSubscribe.start(
      `command`,
      this.commandHandler,
      this,
      `service-worker-store-command`,
      'command',
    );
  }

  async onSeerStoreCreatedEvent(event: SeerStoreCreatedEvent) {
    const { id } = event.data;
    const { $correlationId } = event.metadata;
    await this.publishCommand(`inventory.create`, {
      data: { store_id: id, correlationId: $correlationId },
      metadata: { $correlationId: $correlationId, timestamp: Date.now() },
    });
  }


  async onCreateSeerStoreCommand(command: IBaseEvent<CreateSeerStoreCommand>) {
    await this.commandBus.execute(new CreateSeerStoreCommand({ ...command.data }));
  }

  async onAddSeerStorePaymentMethodCommand(
    command: IBaseEvent<AddSeerStorePaymentMethodCommand>,
  ) {
    await this.commandBus.execute(
      new AddSeerStorePaymentMethodCommand({ ...command.data }),
    );
  }

  async onRemoveSeerStorePaymentMethodCommand(
    command: IBaseEvent<RemoveSeerStorePaymentMethodCommand>,
  ) {
    await this.commandBus.execute(
      new RemoveSeerStorePaymentMethodCommand({ ...command.data }),
    );
  }

  async onUpdateSeerStoreCommand(command: IBaseEvent<UpdateSeerStoreCommand>) {
    await this.commandBus.execute(new UpdateSeerStoreCommand({ ...command.data }));
  }
  async onUpdateSeerStoreRecommendCommand(
    command: IBaseEvent<UpdateSeerStoreRecommendCommand>,
  ) {
    await this.commandBus.execute(
      new UpdateSeerStoreRecommendCommand({ ...command.data }),
    );
  }
  async onApproveSeerStorePaymentMethodCommand(
    command: IBaseEvent<ApproveSeerStorePaymentMethodCommand>,
  ) {
    await this.commandBus.execute(
      new ApproveSeerStorePaymentMethodCommand({ ...command.data }),
    );
  }
  async onRejectSeerStorePaymentMethodCommand(
    command: IBaseEvent<RejectSeerStorePaymentMethodCommand>,
  ) {
    await this.commandBus.execute(
      new RejectSeerStorePaymentMethodCommand({ ...command.data }),
    );
  }
  async onUpdateSeerStorePaymentMethodCommand(
    command: IBaseEvent<UpdateSeerStorePaymentMethodCommand>,
  ) {
    await this.commandBus.execute(
      new UpdateSeerStorePaymentMethodCommand({ ...command.data }),
    );
  }
  async onUpdateReviewPointCommand(
    command: IBaseEvent<UpdateReviewPointCommand>,
  ) {
    await this.commandBus.execute(
      new UpdateReviewPointCommand({ ...command.data }),
    );
  }

  async onUpdateSeerStoreActiveCommand(
    command: IBaseEvent<UpdateSeerStoreActiveCommand>,
  ) {
    await this.commandBus.execute(
      new UpdateSeerStoreActiveCommand({ ...command.data }),
    );
  }

  async onResubmitSeerStorePaymentMethodCommand(
    command: IBaseEvent<ResubmitSeerStorePaymentMethodCommand>,
  ) {
    await this.commandBus.execute(
      new ResubmitSeerStorePaymentMethodCommand({ ...command.data }),
    );
  }

  async onForceUpdateSeerStorePaymentMethodCommand(
    command: IBaseEvent<ForceUpdateSeerStorePaymentMethodCommand>,
  ) {
    await this.commandBus.execute(
      new ForceUpdateSeerStorePaymentMethodCommand({ ...command.data }),
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
