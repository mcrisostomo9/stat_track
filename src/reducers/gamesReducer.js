import {FETCH_GAMES, ERROR_404} from '../actions/types';


export default function gamesData(state = [], action){
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        games: action.payload.data.games.games,
        noGames: false
      }
    case ERROR_404:
      return {
        ...state,
        noGames: action.payload,
        games: []
      }
    default:
      return state;
  }
}
