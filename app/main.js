import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Main from './components/Main.js'
import store from './store.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReportMain from './components/Report/ReportMain'
import ThreadsMain from './components/Threads/Main'
import LandingPage from './components/LandingPage'
import SavedReportsMain from './components/SavedReports/SavedReportsMain'


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/business' component={Main} />
          <Route path='/report' component={ReportMain} />
          <Route path='/threads' component={ThreadsMain} />
          <Route path='/savedReports' component={SavedReportsMain} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);
