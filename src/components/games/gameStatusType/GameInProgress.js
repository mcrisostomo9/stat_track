import React from 'react';

const GameInProgress = (props) => {
    const {game, homeTeam, visitorTeam, startTime} = props;

    return(
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
    )
}

export default GameInProgress;