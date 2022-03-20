import { CreateStoreSeerHandler } from './create-store/create-store.handler';
import { RejectStoreSeerPaymentMethodHandler } from './reject-store-payment-mthod/reject-store-payment-method.handler';
import { UpdateStoreSeerPaymentMethodHandler } from './update-store-payment-method/update-store-payment-method.handler';
import { UpdateStoreSeerRecommendHandler } from './update-store-recommend/update-store-recommend.handler';
import { UpdateStoreSeerHandler } from './update-store/update-store.handler';
import { UpdateReviewPointHandler } from './update-review-point/update-review-point.handler';
import { RemoveStoreSeerPaymentMethodHandler } from './remove-store-payment-method/remove-store-payment-method.handler';
import { AddStoreSeerPaymentMethodHandler } from './add-store-payment-method/add-store-payment-method.handler';
import { UpdateStoreSeerActiveHandler } from './update-store-active/update-store-active.handler';
import { ResubmitStoreSeerPaymentMethodHandler } from './resubmit-store-paymen-method/resubmit-store-payment-method.handler';
import { ForceUpdateStoreSeerPaymentMethodHandler } from './force-update-store-payment-method/force-update-store-payment-method.handler';
import {ApproveStoreSeerPaymentMethodHandler} from "./approve-store-payment-method/approve-store-payment-method.handler";

export const CommandHandler = [
  ApproveStoreSeerPaymentMethodHandler,
  RejectStoreSeerPaymentMethodHandler,
  UpdateStoreSeerPaymentMethodHandler,
  CreateStoreSeerHandler,
  UpdateStoreSeerHandler,
  UpdateStoreSeerRecommendHandler,
  UpdateReviewPointHandler,
  RemoveStoreSeerPaymentMethodHandler,
  AddStoreSeerPaymentMethodHandler,
  UpdateStoreSeerActiveHandler,
  ResubmitStoreSeerPaymentMethodHandler,
  ForceUpdateStoreSeerPaymentMethodHandler,
];
