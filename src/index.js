import ReactDOM from 'react-dom';
import router from './routes/routes.js';
import { injectGlobal } from 'styled-components';

// Tentatively removing overflow-y: scroll
// - Andy
injectGlobal`   
   * {
      box-sizing: border-box 
   }
   
   body {
    background: url(${require('./assets/bg.jpg')}) repeat;
    font-family: 'Roboto', serif;
    overflow-x: hidden;
    height: 100vh;
   }
`;


ReactDOM.render(
  router,
  document.getElementById('root')
);
