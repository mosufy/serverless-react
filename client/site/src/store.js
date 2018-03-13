import { createStore, applyMiddleware } from 'redux';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import { saveState, loadState } from './localStorage';
import reducers from './reducers';
import config from './config';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

const middlewares = [];

// Build the middleware for intercepting and dispatching navigation actions
middlewares.push(routerMiddleware(history));

if (config.app.ENABLE_LOGGER === true) {
  const { createLogger } = require('redux-logger');
  const logger = createLogger({
    diff: true
  });

  middlewares.push(logger);
}

// load data from localStorage
let persistedState = loadState();

// create store
let store = createStore(reducers, persistedState, applyMiddleware(thunk, ...middlewares));

// subscribe to state changes
// throttle added to only persist to localStorage at 1s interval
store.subscribe(throttle(() => {
  saveState({
    // Add more state objects as required for persistence
    auth: store.getState().auth,
    billingPlans: store.getState().billingPlans,
  })
}, 1000));

export default store;