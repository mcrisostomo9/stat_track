import {FETCH_STANDINGS} from '../actions/types';

export default function standingsData(state = {}, action){
  switch (action.type) {
    case FETCH_STANDINGS:
      console.log('reducer for StandingsReducer', action.payload.league)            
      return {
        ...state,
        standings: action.payload.league.standard.conference
      }
    default:
      return state
  }
}
