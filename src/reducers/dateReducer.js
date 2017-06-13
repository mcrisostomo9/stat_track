import {SET_DATE, FETCH_CALENDAR} from '../actions/types';

export default function setDate(state = '', action){
  switch (action.type) {
    case SET_DATE:
          return {
                ...state,
                viewedDate: action.numeric,
                viewedDateLongForm: action.longDate,
                unformattedDate: action.unformattedDate
          }
      case FETCH_CALENDAR:
          return {
              ...state,
              endSeasonDate: action.payload.calendar
          }
    default:
      return state
  }
}
