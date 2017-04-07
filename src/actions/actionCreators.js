import {FETCH_GAMES, FETCH_STANDINGS} from './types';
import nba from 'nba.js';

export function fetchGamesFromServer(day){
  nba.data.scoreboard({date: day}).then(res=>{
    return{
      type: FETCH_GAMES,
      payload: res.games
    }
  }).catch(err=>(
    console.log('error returned', err)
    ))
}
