import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StoreSeerRepository } from '../../repository/store-seer.repository';
import { StoreSeerAggregate } from '../../aggregate/store-seer.aggregate';
import { CreateStoreSeerCommand } from './create-store.command';
import { MerchantRepository } from '../../repository/merchant.repository';
import { StoreSeerSanitizer } from 'src/store/utils/store.sanitizer';
import { StoreSeerAlreadyExistsForOwnerException } from 'src/store/exception/store-already-exists-for-owner.exception';
import { EventstoreService } from '@app/eventstore';
import { StoreSeerOwnerNotFoundException } from 'src/store/exception/store-owner-not-found.exception';

@CommandHandler(CreateStoreSeerCommand)
export class CreateStoreSeerHandler implements ICommandHandler<CreateStoreSeerCommand> {
  constructor(
    private readonly storeRepository: StoreSeerRepository,
    private readonly merchantRepository: MerchantRepository,
    private readonly eventstoreService: EventstoreService,
  ) {}

  async execute(command: CreateStoreSeerCommand) {
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

    let storeAggregate: StoreSeerAggregate;
    try {
      storeAggregate = await this.storeRepository.create();

      if (await this.storeRepository.isStoreSeerExistForOwner(owner)) {
        await this.eventstoreService.publishException(
          new StoreSeerAlreadyExistsForOwnerException({
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

      // const merchant = await this.merchantRepository.getOne({ user: owner });
      // if (!merchant) {
      //   await this.eventstoreService.publishException(
      //     new StoreSeerOwnerNotFoundException({
      //       data: {
      //         owner,
      //       },
      //       metadata: {
      //         timestamp: Date.now(),
      //         $correlationId: command.correlationId,
      //       },
      //     }),
      //   );
      //
      //   return;
      // }

      storeAggregate.createStoreSeer(
        correlationId,
        StoreSeerSanitizer.sanitizeContact(contact),
        StoreSeerSanitizer.sanitizeProfile(profile),
        owner,
        StoreSeerSanitizer.sanitizePaymentMethods(payment_method),
        shipping_method,
        active,
        StoreSeerSanitizer.sanitizeVideo(video)
      );
      await this.storeRepository.save(storeAggregate, correlationId);
    } catch (e) {
      console.log('|CreateStoreSeerHandler|' + e.message);
    }
  }
}
