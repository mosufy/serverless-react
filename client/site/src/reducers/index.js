import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import metadata from "./metadata";
import modal from "./modal";
import form from "./form";
import auth from "./auth";
import billing from "./billing";
import billingPlans from "./billingPlans";
import billingPlanSelected from "./billingPlanSelected";
import pageLoader from "./pageLoader";

// create reducer object
const appReducer = combineReducers({
  router: routerReducer,
  metadata,
  modal,
  form,
  auth,
  billing,
  billingPlans,
  billingPlanSelected,
  pageLoader,
});

const reducers = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action);
};

export default reducers;