import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Main from  './components/Main.js'
import store from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app'), // make sure this is the same as the id of the div in your index.html
);
