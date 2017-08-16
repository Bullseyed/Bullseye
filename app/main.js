import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Main from './components/Main.js'
import store from './store.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReportMain from './components/Report/ReportMain'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/report' component={ReportMain} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);
