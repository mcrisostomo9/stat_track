import {FETCH_GAMES, FETCH_STANDINGS} from './types';
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
