import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandSubscriptionModule } from './command-subscription/command-subscription.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from '../config';
import {SeerStoreModule} from "./seer-store/store.module";


@Module({
  imports: [SeerStoreModule, CommandSubscriptionModule,
    MongooseModule.forRoot(
      config.db.snapshot.full_url
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
