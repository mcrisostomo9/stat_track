import {FETCH_GAMES} from '../actions/types';


export default function gamesData(state = [], action){
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
