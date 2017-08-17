import React from 'react';
import teams from '../../data/teamInfo';

const RegularGame = (props)=> {
  let {game, startTime} = props;

  let homeTeam  = teams.filter((homeTeam) => {
        return (homeTeam.teamId === game.hTeam.teamId)
  })
  let visitorTeam = teams.filter((visitorTeam) =>{
      return (visitorTeam.teamId === game.vTeam.teamId);
  })

  // for final score
  if(game.attendance > 0 && game.isGameActivated === false && game.period.isHalftime === false){
  return(
      <div  className='col-xs-12 col-md-4'>
          <div className='panel panel-warning'>
              <div className='panel-heading'>
                  <div className="row">
                      <div className="col-xs-12 text-right">FINAL SCORE</div>
                  </div>
              </div>
              <div className='panel-body'>
                  <div className="row scoreboard_first_team_row">
                      <div className="col-xs-9"><img className="nba_team_images_scoreboard" src={visitorTeam[0].logo} alt=""/> {visitorTeam[0].fullName}</div>
                      <div className="score col-xs-3 text-center">{game.vTeam.score}</div>
                  </div>
                  <div className="row">
                      <div className="col-xs-9"><img className="nba_team_images_scoreboard" src={homeTeam[0].logo} alt=""/> {homeTeam[0].fullName}</div>
                      <div className="score col-xs-3 text-center">{game.hTeam.score}</div>
                  </div>
              </div>
          </div>
      </div>
  )
}
  //for game that hasnt started
  if(game.isGameActivated === false){
  return(
      <div  className='col-xs-12 col-md-4'>
          <div className='panel panel-warning'>
              <div className='panel-heading'>
                  <div className="row">
                      <div className="col-xs-12 text-right">Start time: {startTime}</div>
                  </div>
              </div>
              <div className='panel-body'>
                  <div className="row scoreboard_first_team_row">
                      <div className="col-xs-9"><img className="nba_team_images_scoreboard" src={visitorTeam[0].logo} alt=""/> {visitorTeam[0].fullName}</div>
                      <div className="score col-xs-3 text-center"></div>
                  </div>
                  <div className="row">
                      <div className="col-xs-9"><img className="nba_team_images_scoreboard" src={homeTeam[0].logo} alt=""/> {homeTeam[0].fullName}</div>
                      <div className="score col-xs-3 text-center"></div>
                  </div>
              </div>
          </div>
      </div>
  )
}
// for game in progress
return(
    <div  className='col-xs-12 col-md-4'>
        <div className='panel panel-warning'>
            {
              (game.period.isHalftime === true)
                    ? <div className='panel-heading'>
                    <div className="row">
                        <div className="col-xs-12 text-right">Halftime</div>
                    </div>
                </div>
                    : <div className='panel-heading'>
                    <div className="row">
                      {
                        // to get rid of showing Quarter 0 showing when game is acvtivated
                        (game.period.current ===0)
                        ? <div className="col-xs-7 text-right">Start time: {startTime}</div>
                        : <div className="col-xs-7 text-right">Q{game.period.current} - {game.clock}</div>
                      }                    </div>
                </div>
            }
            <div className='panel-body'>
                <div className="row scoreboard_first_team_row">
                    <div className="col-xs-9"><img className="nba_team_images_scoreboard" src={homeTeam[0].logo} alt=""/> {visitorTeam[0].fullName}</div>
                    <div className="score col-xs-3 text-center">{game.vTeam.score}</div>
                </div>
                <div className="row">
                    <div className="col-xs-9"><img className="nba_team_images_scoreboard" src={homeTeam[0].logo} alt=""/> {homeTeam[0].fullName}</div>
                    <div className="score col-xs-3 text-center">{game.hTeam.score}</div>
                </div>
            </div>
        </div>
    </div>
)
}

export default RegularGame
