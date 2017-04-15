import React from 'react';
import {connect} from 'react-redux';
import {fetchGamesFromApi} from '../actions/actionCreators';
import GamesContainer from './gamesContainer'

class Scoreboard extends React.Component {
    componentDidMount() {
        let {viewedDate} = this.props;
        this.props.fetchGames(viewedDate);
    }
    shouldComponentUpdate(nextProps) {
        if (this.props.viewedDate === nextProps.viewedDate)
            return false;
        this.props.fetchGames(nextProps.viewedDate);
        return true;
    }

    render() {
        //handles initial render to show loading of the games, probably need to refine tho
        let {games} = this.props;
        if (!games) {
            return (
                <div>
                   {/* No games today */}
                </div>
            )
        }
        return (
            <div className='col-md-5 table-hover'>
                <h1>NBA Scores</h1>
                <GamesContainer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {games: state.gamesData.games, viewedDate: state.setDate.viewedDate}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGames: (day) => dispatch(fetchGamesFromApi(day))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
