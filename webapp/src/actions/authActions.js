import * as sdk from '../lib/sdk';

export const signup = (values) => {
  return (dispatch) => {
    console.log('formValues', values);
  }
};

export const pingTest = () => {
  return () => {
    return sdk.pingTest()
      .then((res) => {
        console.log('API is online');
      })
      .catch((err) => {
        console.log('Failed to connect to API');
      })
  }
};