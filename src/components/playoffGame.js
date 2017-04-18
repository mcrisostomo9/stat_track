import React from 'react';

const PlayoffGame = (props)=> {
  let {game} = props;
  let {startTime} = props;
  // for final score
  if(game.attendance > 0 && game.clock === ""){
      return(
          <div  className='col-xs-12 col-md-4'>
              <div className='panel panel-warning'>
                  <div className='panel-heading'>
                      <div className="row">
                          <div className="col-xs-9">GAME {game.playoffs.gameNumInSeries}</div>
                          <div className="col-xs-3">FINAL</div>
                      </div>
                  </div>
                  <div className='panel-body'>
                      <div className="row">
                          <div className="col-xs-9">{game.vTeam.triCode}</div>
                          <div className="col-xs-3 text-center">{game.vTeam.score}</div>
                      </div>
                      <div className="row">
                          <div className="col-xs-9">{game.hTeam.triCode}</div>
                          <div className="col-xs-3 text-center">{game.hTeam.score}</div>
                      </div>
                  </div>
                  <div className='panel-footer'>
                      {game.playoffs.seriesSummaryText}
                  </div>
              </div>
          </div>
      )
  }
  //for game that hasnt started
  if(game.clock === ""){
      return(
          <div  className='col-xs-12 col-md-4'>
              <div className='panel panel-warning'>
                  <div className='panel-heading'>
                      <div className="row">
                          <div className="col-xs-5">GAME {game.playoffs.gameNumInSeries}</div>
                          <div className="col-xs-7 text-right">Start time: {startTime}</div>
                      </div>
                  </div>
                  <div className='panel-body'>
                      <div className="row">
                          <div className="col-xs-9">{game.vTeam.triCode}</div>
                          <div className="col-xs-3 text-center">{game.vTeam.score}</div>
                      </div>
                      <div className="row">
                          <div className="col-xs-9">{game.hTeam.triCode}</div>
                          <div className="col-xs-3 text-center">{game.hTeam.score}</div>
                      </div>
                  </div>
                  <div className='panel-footer'>
                      {game.playoffs.seriesSummaryText}
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
                    (game.clock === "")
                        ? <div className='panel-heading'>
                        <div className="row">
                            <div className="col-xs-5">GAME {game.playoffs.gameNumInSeries}</div>
                            <div className="col-xs-7 text-right">Halftime</div>
                        </div>
                    </div>
                        : <div className='panel-heading'>
                        <div className="row">
                            <div className="col-xs-5">GAME {game.playoffs.gameNumInSeries}</div>
                            <div className="col-xs-7 text-right">{game.period.current}Q - {game.clock}</div>
                        </div>
                    </div>
                }
                <div className='panel-body'>
                    <div className="row">
                        <div className="col-xs-9">{game.vTeam.triCode}</div>
                        <div className="col-xs-3 text-center">{game.vTeam.score}</div>
                    </div>
                    <div className="row">
                        <div className="col-xs-9">{game.hTeam.triCode}</div>
                        <div className="col-xs-3 text-center">{game.hTeam.score}</div>
                    </div>
                </div>
                <div className='panel-footer'>
                    {game.playoffs.seriesSummaryText}
                </div>
            </div>
        </div>
  )
}

export default PlayoffGame
