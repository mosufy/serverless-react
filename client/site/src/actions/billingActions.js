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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
};