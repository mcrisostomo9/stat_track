import {FETCH_GAMES} from '../actions/types';

const INITIAL_STATE = { games: [] };

function gamesData(state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        games: action.payload
      }
    default:
      return state
  }
}

export default gamesData;
