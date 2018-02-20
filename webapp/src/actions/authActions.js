import * as sdk from '../lib/sdk';
import { signupCognitoUser } from "../lib/aws";
import { showError, showSuccess, dismissAlert } from "./formActions";

export const signup = (values) => {
  return (dispatch) => {
    dispatch(dismissAlert());

    return signupCognitoUser(values)
      .then((res) => {
        dispatch(showSuccess('Your registration is successful. Instructions have been sent to your email.'));
      })
      .catch((err) => {
        dispatch(showError(err.code, err.message));
      });
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