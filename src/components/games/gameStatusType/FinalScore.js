import React from 'react';

const FinalScore = (props) => {
    let {game, homeTeam, visitorTeam} = props;


    return(
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
    )
}

export default FinalScore;