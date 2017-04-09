import { combineReducers } from 'redux';
import gamesData from './gamesReducer';

//to combine reducers
const rootReducer = combineReducers({games: gamesData});

export default rootReducer;
