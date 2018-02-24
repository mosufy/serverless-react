import * as sdk from "../lib/sdk";

export const onStripeChargeTokenCallback = (token) => {
  return (dispatch) => {
    return sdk.createCharge({
      token: token,
      charge: {
        amount: 350,
        currency: 'SGD',
      }
    })
      .then((res) => {
        dispatch({
          type: 'STORE_BILLING_SUCCESS',
          payload: {
            status: res.data.message.status,
            amount: res.data.message.amount,
            currency: res.data.message.currency,
            transaction_id: res.data.message.id,
          }
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
};