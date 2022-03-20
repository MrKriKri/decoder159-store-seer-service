import { Global, Module } from '@nestjs/common';
import { CommandSubscriptionService } from './command-subscription.service';
import { EventstoreModule } from '../../libs/eventstore/src';
import { CqrsModule } from '@nestjs/cqrs';

@Global()
@Module({
  imports: [EventstoreModule, CqrsModule],
  providers: [CommandSubscriptionService],
  exports: [CommandSubscriptionService]
})
export class CommandSubscriptionModule { }
