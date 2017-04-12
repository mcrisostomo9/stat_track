import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App.js';
import Scoreboard from './components/scoreboard.js';
import Standings from './components/standings.js';

import { Provider } from 'react-redux';
import store, { history } from './store.js';

const router = (
  <Provider store = { store }>
    <Router history = { history }>
      <Route path ='/' component = { App }>
        <IndexRoute component = { Scoreboard } />
        <Route path ='Standings' component = {Standings}/> 
      </Route>
    </Router>
  </Provider>
)

export default router;