import {
  COUPON_DETAILS_REQUEST,
  COUPON_DETAILS_SUCCESS,
  COUPON_DETAILS_FAIL
} from "../Constants/CouponConstants";
import axios from "axios";

// SINGLE COUPON
export const listCouponDetails = (code) => async (dispatch, getState) => {
  try {
    dispatch({type: COUPON_DETAILS_REQUEST});

    const { data } = await axios.get(`/api/coupons/${code}`);
    
    dispatch({
      type: COUPON_DETAILS_SUCCESS, 
      payload: data
    });

  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    dispatch({type: COUPON_DETAILS_FAIL, payload: message});
  }
};
