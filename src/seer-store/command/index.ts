import {ApproveSeerStorePaymentMethodHandler} from "./approve-seer-store-payment-method/approve-seer-store-payment-method.handler";
import {RejectSeerStorePaymentMethodHandler} from "./reject-seer-store-payment-mthod/reject-seer-store-payment-method.handler";
import {UpdateSeerStorePaymentMethodHandler} from "./update-seer-store-payment-method/update-seer-store-payment-method.handler";
import {ForceUpdateSeerStorePaymentMethodHandler} from "./force-update-seer-store-payment-method/force-update-seer-store-payment-method.handler";
import {AddSeerStorePaymentMethodHandler} from "./add-seer-store-payment-method/add-store-payment-method.handler";
import {RemoveSeerStorePaymentMethodHandler} from "./remove-seer-store-payment-method/remove-seer-store-payment-method.handler";
import {UpdateReviewPointHandler} from "./update-review-point/update-review-point.handler";
import {UpdateSeerStoreRecommendHandler} from "./update-seer-store-recommend/update-seer-store-recommend.handler";
import {UpdateSeerStoreHandler} from "./update-seer-store/update-seer-store.handler";
import {CreateSeerStoreHandler} from "./create-seer-store/create-seer-store.handler";
import {UpdateSeerStoreActiveHandler} from "./update-seer-store-active/update-seer-store-active.handler";
import {ResubmitSeerStorePaymentMethodHandler} from "./resubmit-seer-store-paymen-method/resubmit-seer-store-payment-method.handler";

export const CommandHandler = [
  ApproveSeerStorePaymentMethodHandler,
  RejectSeerStorePaymentMethodHandler,
  UpdateSeerStorePaymentMethodHandler,
  CreateSeerStoreHandler,
  UpdateSeerStoreHandler,
  UpdateSeerStoreRecommendHandler,
  UpdateReviewPointHandler,
  RemoveSeerStorePaymentMethodHandler,
  AddSeerStorePaymentMethodHandler,
  UpdateSeerStoreActiveHandler,
  ResubmitSeerStorePaymentMethodHandler,
  ForceUpdateSeerStorePaymentMethodHandler,
];
