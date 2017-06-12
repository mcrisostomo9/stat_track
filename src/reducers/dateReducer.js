import {SET_DATE} from '../actions/types';

export default function setDate(state = '', action){
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        viewedDate: action.numeric,
        viewedDateLongForm: action.longDate,
        unformattedDate: action.unformattedDate
      }
    default:
      return state
  }
}
