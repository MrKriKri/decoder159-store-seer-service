import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreSeerModule } from './store/store.module';
import { CommandSubscriptionModule } from './command-subscription/command-subscription.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from '../config';


@Module({
  imports: [StoreSeerModule, CommandSubscriptionModule,
    MongooseModule.forRoot(
      config.db.snapshot.full_url
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
