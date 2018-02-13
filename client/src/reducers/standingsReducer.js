import {FETCH_STANDINGS} from '../actions/types';

export default function standingsData(state = {}, action){
  switch (action.type) {
    case FETCH_STANDINGS:
      return {
        ...state,
        standings: action.payload.data.games.league.standard.conference
      }
    default:
      return state
  }
}
