import { combineReducers } from 'redux';
import gamesData from './gamesReducer';
import standingsData from './standingsReducer';
import setDate from './dateReducer';


//to combine reducers
const rootReducer = combineReducers({gamesData, standingsData, setDate});

export default rootReducer;
