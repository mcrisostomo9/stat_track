import { combineReducers } from 'redux';
import gamesData from './gamesReducer';
import standingsData from './standingsReducer';


//to combine reducers
const rootReducer = combineReducers({gamesData, standingsData});

export default rootReducer;
