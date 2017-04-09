import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store;
