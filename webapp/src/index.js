import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './assets/themes/css/one-page-wonder.css';
import './assets/css/main.css';

import AppContainer from './containers/AppContainer';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
