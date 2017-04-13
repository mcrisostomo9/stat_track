import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import App from './App.js';
import DateNavi from './components/dateNavi.js';
import Standings from './components/standings.js';

import { Provider } from 'react-redux';
import store from './store.js';


const router =(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ DateNavi } />
        <Route path='Standings' component={Standings}/>
      </Route>
    </Router>
  </Provider>
)

export default router;
