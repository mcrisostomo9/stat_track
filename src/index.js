import ReactDOM from 'react-dom';
import router from './routes/routes.js';
import {  injectGlobal } from 'styled-components';

injectGlobal`   
   * {
      box-sizing: border-box 
   }
   
   body {
    background: url(${require('./assets/bg.jpg')}) repeat;
    font-family: 'Roboto', serif;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100vh;
   }
`;


ReactDOM.render(
  router,
  document.getElementById('root')
);
