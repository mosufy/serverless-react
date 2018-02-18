import { combineReducers } from 'redux';

import metadata from "./metadata";
import modal from "./modal";

// create reducer object
const reducers = combineReducers({
  metadata,
  modal,
});

export default reducers;