import React, {Component} from 'react';
import {connect} from 'react-redux';
import RegularGame from './gameTypes/regularGame';
import PlayoffGame from './gameTypes/playoffGame';

class GamesContainer extends Component {

    renderGames() {

        return this.props.games.map((game) => {
            //convert UTC time received from nba.js to local start time of game
            let startTime = new Date(game.startTimeUTC).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            });
            //to differentiate regular season game format vs playoffs
            if (!game.playoffs) {
                return (<RegularGame key={game.gameId} game={game} startTime={startTime}/>)
            }
            return (<PlayoffGame key={game.gameId} game={game} startTime={startTime}/>)
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderGames()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {games: state.gamesData.games}
}
export default connect(mapStateToProps)(GamesContainer);
