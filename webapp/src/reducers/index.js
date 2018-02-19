import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import metadata from "./metadata";
import modal from "./modal";

// create reducer object
const reducers = combineReducers({
  metadata,
  modal,
  router: routerReducer
});

export default reducers;