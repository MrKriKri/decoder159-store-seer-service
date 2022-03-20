import { Global, Module } from '@nestjs/common';
import { EventstoreService } from './eventstore.service';

@Global()
@Module({
  providers: [EventstoreService],
  exports: [EventstoreService],
})
export class EventstoreModule { }
