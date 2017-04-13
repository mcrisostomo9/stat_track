import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store.js';
import router from './routes.js';

ReactDOM.render(
  router,
  document.getElementById('root')
);
