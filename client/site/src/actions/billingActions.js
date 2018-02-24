import * as sdk from "../lib/sdk";

export const onStripeChargeTokenCallback = (token) => {
  return (dispatch) => {
    console.log(token);

    return sdk.pingTest()
      .then((res) => {
        console.log('API is online');
      })
      .catch((err) => {
        console.log('Failed to connect to API');
      })
  }
};