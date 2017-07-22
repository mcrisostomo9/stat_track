import React from 'react';
import teams from '../../../teamData/teamInfo';
import FinalScore from '../gameStatusType/FinalScore';
import BeforeGameStart from "../gameStatusType/BeforeGameStart";
import GameInProgress from "../gameStatusType/GameInProgress";

const RegularGame = (props)=> {
  let {game, startTime} = props;

  let homeTeam  = teams.filter((homeTeam) => {
        return (homeTeam.teamId === game.hTeam.teamId)
  });
  let visitorTeam = teams.filter((visitorTeam) =>{
      return (visitorTeam.teamId === game.vTeam.teamId);
  });

  // for final score
  if(game.attendance > 0 && game.isGameActivated === false && game.period.isHalftime === false){
  return(
      <div  className='col-xs-12 col-md-4'>
          <FinalScore game={game} homeTeam={homeTeam} visitorTeam={visitorTeam}/>
      </div>
  )
}
  //for game that hasnt started
  if(game.isGameActivated === false){
  return(
      <div  className='col-xs-12 col-md-4'>
          <BeforeGameStart homeTeam={homeTeam} visitorTeam={visitorTeam} startTime={startTime}/>
      </div>
  )
}
// for game in progress
return(
    <div  className='col-xs-12 col-md-4'>
        <GameInProgress game={game} homeTeam={homeTeam} visitorTeam={visitorTeam} startTime={startTime}/>
    </div>
)
}

export default RegularGame
