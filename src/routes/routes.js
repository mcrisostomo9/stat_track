import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App.js';

import { Provider } from 'react-redux';
import store from '../store.js';


const router =(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>
)

export default router;
