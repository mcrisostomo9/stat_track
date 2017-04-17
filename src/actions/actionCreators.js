import {FETCH_GAMES, FETCH_STANDINGS, SET_DATE} from './types';
import nba from 'nba.js';


//function to dispatch the reducer, used in the fetchGamesFromApi to handle async call
function gamesAction(res){
  return{
    type: FETCH_GAMES,
    payload: res
  }
}

export function fetchGamesFromApi(day){
  return (dispatch) =>{
    //dispatching the nba.js method to return a respnse
    return nba.data.scoreboard({date: day}).then(res =>{
      //when response is received, dispatches gamesAction function with the received response as a param
      dispatch(gamesAction(res))
    })
    .catch(err =>{
      console.log('error', err);
    })
  }
}

//function to dispatch the standings reducer
function standingsAction(res){
  return{
    type: FETCH_STANDINGS,
    payload: res
  }
}

export function fetchStandingsFromApi(){
  return (dispatch)=>{
    return nba.data.conferenceStandings().then(res =>{
      dispatch(standingsAction(res))
    })
    .catch(err=>{
      console.log('error', err);
    })
  }
}


//to format given date for api
// Date.prototype.yyyymmdd = function() {
//   let mm = this.getMonth() + 1; // getMonth() is zero-based
//   let dd = this.getDate();
//
//   return [this.getFullYear(),
//           (mm>9 ? '' : '0') + mm,
//           (dd>9 ? '' : '0') + dd
//          ].join('');
// };

function convertDate(date){
  let mm = date.getMonth() + 1; // getMonth() is zero-based
  let dd = date.getDate();

  return [date.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
}

export function setViewedDate(date){
  let dateLongForm = date.toDateString();
  let dateNumeric = convertDate(date);//converts given date to YYYYMMDD
  return {
    type: SET_DATE,
    numeric: dateNumeric,
    longDate: dateLongForm,
    unformattedDate: date
  }
}
