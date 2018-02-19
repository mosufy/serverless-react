import axios from 'axios';
import isEmpty from 'lodash.isempty';
import { history } from "../store";

import {GET, PUT, POST, authBearerToken, authBearerTokenNoCache, authBearerTokenMultipartFormData, authXAPIKey} from './constants';
import appConfig from '../config';
import store from '../store';

const sendRequest = (
  path = '/',
  reqMethod = GET,
  params = {},
  type = authBearerToken,
  bearerToken = null,
) => {
  let paramType = 'params';
  let headers;

  if (reqMethod === POST || reqMethod === PUT) {
    paramType = 'data';
  }

  if (type === authXAPIKey) {
    headers = {
      'x-api-key': appConfig.x_api_key || '',
    };
  } else {
    bearerToken = bearerToken !== null ? bearerToken : !isEmpty(store.getState().auth) ? store.getState().auth.token : '';

    if (isEmpty(bearerToken) && !isEmpty(params.authToken)) {
      bearerToken = params.authToken;
    }

    headers = {
      Authorization: `Bearer ${bearerToken}`,
    };

    if (type === authBearerTokenNoCache) {
      headers = {
        ...headers,
        'Cache-Control': 'no-cache, max-age=0, must-revalidate, no-store',
      };
    } else if (type === authBearerTokenMultipartFormData) {
      headers = {
        ...headers,
        'Content-Type': 'multipart/form-data',
      };
    }
  }

  let axiosOptions = {
    method: reqMethod,
    url: appConfig.base_url + path,
    [paramType]: params,
    headers,
  };

  return axios(axiosOptions);
};

const interceptResponse = response => {
  if (response.config.url.match(/api\/auth\/refresh-token/)) {
    //store.dispatch(authActions.saveToken(response.data.response));
  }

  return response;
};

const interceptError = error => {
  if (error.response === undefined) {
    console.log('axios_error', error);
    return Promise.reject(error);
  }

  console.log('axios_error', error.response);

  if (error.response.status === 404 || error.response.status === 403) {
    history.push('/error404');
  } else if (error.response.status === 401) {
    return Promise.reject(error);
  }
};

axios.interceptors.response.use(response => interceptResponse(response), error => interceptError(error));

axios.interceptors.request.use(
  config => {
    let originalRequest = config;

    if (!isEmpty(originalRequest.auth !== undefined)) {
      return config;
    }

    if (
      originalRequest.headers === undefined ||
      originalRequest.headers.Authorization === undefined ||
      originalRequest.headers.Authorization.match(/^Bearer/) === null ||
      isEmpty(store.getState().auth) ||
      isEmpty(store.getState().auth.token) ||
      config.url.match(/api\/auth\/refresh-token/)
    ) {
      return config;
    }

    // let token = store.getState().auth.token;
    // let tokenPayload = decodeJWT(token);
    // let minsLeft = (tokenPayload.exp - moment().unix()) / 60;
    //
    // if (minsLeft < 15) {
    //   return getAuthToken()
    //     .then(response => {
    //       originalRequest.headers.Authorization = `Bearer ${response.data.response}`;
    //       return Promise.resolve(originalRequest);
    //     })
    //     .catch(error => {
    //       console.log('error getAuthToken', error);
    //     });
    // }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const pingTest = () => sendRequest('/api/services/ping', GET, {}, authXAPIKey);