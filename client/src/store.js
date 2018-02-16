import {createStore, applyMiddleware} from 'redux';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';

import {saveState, loadState} from './localStorage';
import reducers from './reducers';
import config from './config';

const middlewares = [];

if (config.enable_logger === true) {
  const {createLogger} = require('redux-logger');
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
  })
}, 1000));

export default store;