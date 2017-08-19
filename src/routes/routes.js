import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import App from '../App.js';
import Scoreboard from './Scoreboard/Scoreboard.js';
import Standings from './Standings/Standings.js';

import { Provider } from 'react-redux';
import store from '../store.js';


const router =(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Scoreboard } />
        <Route path='Standings' component={ Standings }/>
      </Route>
    </Router>
  </Provider>
)

export default router;
