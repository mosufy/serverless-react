import * as sdk from '../lib/sdk';
import { signupCognitoUser, confirmCognitoUser, loginCognitoUser, logoutCognitoUser } from "../lib/aws";
import { showError, showSuccess, dismissAlert } from "./formActions";
import { toggleLoginModal } from "./modalActions";
import { history } from "../store";
import { resetState } from "../localStorage";

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
  return (dispatch, getState) => {
    dispatch(dismissAlert());

    const { from } = getState().router.location.state || { from: { pathname: "/account" } };

    return loginCognitoUser(values)
      .then((res) => {
        dispatch(storeAuthenticated(res));
        dispatch(toggleLoginModal());
        history.push(from.pathname);
      })
      .catch((err) => {
        dispatch(showError(err.code, err.message));
      });
  }
};

const storeAuthenticated = (data) => {
  return {
    type: 'STORE_AUTHENTICATED',
    payload: {
      userId: data.idToken.payload.sub,
      email: data.idToken.payload.email,
      family_name: data.idToken.payload.family_name,
      given_name: data.idToken.payload.given_name,
    }
  }
};

const userLoggedOut = () => {
  return {
    type: 'USER_LOGOUT',
  }
};

export const logout = () => {
  return (dispatch) => {
    logoutCognitoUser();
    dispatch(userLoggedOut());
    resetState();
    history.push('/');
  }
};