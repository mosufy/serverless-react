import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import metadata from "./metadata";
import modal from "./modal";
import form from "./form";
import auth from "./auth";
import billing from "./billing";

// create reducer object
const reducers = combineReducers({
  router: routerReducer,
  metadata,
  modal,
  form,
  auth,
  billing,
});

export default reducers;