import {
  COUPON_DETAILS_REQUEST,
  COUPON_DETAILS_SUCCESS,
  COUPON_DETAILS_FAIL
} from "../Constants/CouponConstants";

// CREATE ORDER
export const couponListReducer = (state = {}, action) => {
  switch (action.type) {
    case COUPON_DETAILS_REQUEST:
      console.log("couponListReducer: COUPON_DETAILS_REQUEST");
      return 0;
    case COUPON_DETAILS_SUCCESS:
      console.log("couponListReducer: COUPON_DETAILS_SUCCESS: " + action.payload.percentDiscount);
      return action.payload.percentDiscount;
    case COUPON_DETAILS_FAIL:
      console.log("couponListReducer: COUPON_DETAILS_FAIL: " + action.payload);
      return 0;
    default:
      return state;
  }
};
