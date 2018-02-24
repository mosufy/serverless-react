import * as sdk from '../lib/sdk';
import { signupCognitoUser, confirmCognitoUser, loginCognitoUser } from "../lib/aws";
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

export const confirmUser = (username, confirmationCode) => {
  return (dispatch) => {
    return confirmCognitoUser(username, confirmationCode);
  }
};

export const login = (values) => {
  return (dispatch) => {
    dispatch(dismissAlert());

    return loginCognitoUser(values)
      .then((res) => {
        //history.push('/account');
        console.log(res);
      })
      .catch((err) => {
        dispatch(showError(err.code, err.message));
      });
  }
};