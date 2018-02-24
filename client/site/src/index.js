import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import './assets/themes/css/one-page-wonder.css';
import './assets/css/main.css';

import AppContainer from './containers/AppContainer';
import store, { history } from './store';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer/>
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));

//registerServiceWorker();
