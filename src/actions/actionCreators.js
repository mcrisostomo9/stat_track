import {FETCH_GAMES} from './types';
import nba from 'nba.js';

export function fetchGamesFromApi(day){
  nba.data.scoreboard({date: day}).then(res=>{
    console.log('this is the res', res.games);
    return{
      type: FETCH_GAMES,
      payload: res.games
    }
  }).catch(err=>(
    console.log('error returned', err)
    ))
}
