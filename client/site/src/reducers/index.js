import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import metadata from "./metadata";
import modal from "./modal";
import form from "./form";
import auth from "./auth";

// create reducer object
const reducers = combineReducers({
  router: routerReducer,
  metadata,
  modal,
  form,
  auth,
});

export default reducers;