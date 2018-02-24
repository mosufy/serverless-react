import * as sdk from '../lib/sdk';
import { signupCognitoUser, confirmCognitoUser, loginCognitoUser, getCurrentUser, logoutCognitoUser } from "../lib/aws";
import { showError, showSuccess, dismissAlert } from "./formActions";
import { toggleLoginModal } from "./modalActions";
import { history } from "../store";

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
        dispatch(storeAuthenticated());
        dispatch(toggleLoginModal());
        history.push('/account');
      })
      .catch((err) => {
        dispatch(showError(err.code, err.message));
      });
  }
};

const storeAuthenticated = () => {
  return {
    type: 'STORE_AUTHENTICATED',
  }
};

const removeAuthenticated = () => {
  return {
    type: 'REMOVE_AUTHENTICATED',
  }
};

export const currentUser = () => {
  return (dispatch) => {
    let currentUser = getCurrentUser();
    if (currentUser !== null) {
      dispatch(storeAuthenticated());
    } else {
      dispatch(removeAuthenticated());
    }
  }
};

export const logout = () => {
  return (dispatch) => {
    logoutCognitoUser();
    dispatch(removeAuthenticated());
    history.push('/');
  }
};