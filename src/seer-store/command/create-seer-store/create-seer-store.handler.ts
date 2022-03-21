import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SeerStoreRepository } from '../../repository/store-seer.repository';
import { SeerStoreAggregate } from '../../aggregate/store-seer.aggregate';
import { CreateSeerStoreCommand } from './create-seer-store.command';
import { EventstoreService } from '@app/eventstore';
import {SeerStoreAlreadyExistsForOwnerException} from "../../exception/store-already-exists-for-owner.exception";
import {SeerStoreSanitizer} from "../../utils/store.sanitizer";

@CommandHandler(CreateSeerStoreCommand)
export class CreateSeerStoreHandler implements ICommandHandler<CreateSeerStoreCommand> {
  constructor(
    private readonly storeRepository: SeerStoreRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: CreateSeerStoreCommand) {
    const {
      profile,
      payment_method,
      owner,
      contact,
      correlationId,
      shipping_method,
      active,
      video
    } = command;

    let storeAggregate: SeerStoreAggregate;
    try {
      storeAggregate = await this.storeRepository.create();

      if (await this.storeRepository.isSeerStoreExistForOwner(owner)) {
        await this.eventstoreService.publishException(
          new SeerStoreAlreadyExistsForOwnerException({
            data: {
              owner,
            },
            metadata: {
              timestamp: Date.now(),
              $correlationId: command.correlationId,
            },
          }),
        );

        return;
      }



      storeAggregate.createSeerStore(
        correlationId,
        SeerStoreSanitizer.sanitizeContact(contact),
        SeerStoreSanitizer.sanitizeProfile(profile),
        owner,
        SeerStoreSanitizer.sanitizePaymentMethods(payment_method),
        shipping_method,
        active,
        SeerStoreSanitizer.sanitizeVideo(video)
      );
      await this.storeRepository.save(storeAggregate, correlationId);
    } catch (e) {
      console.log('|CreateSeerStoreHandler|' + e.message);
    }
  }
}
