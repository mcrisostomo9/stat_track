import React from 'react';
import {connect} from 'react-redux';
import {fetchGamesFromApi} from '../actions/actionCreators';
import GamesContainer from './gamesContainer'

class Scoreboard extends React.Component {
    //make call to fetch game on mount
    componentDidMount(){
      let {viewedDate, games} = this.props;
      this.props.fetchGames(viewedDate);
      console.log('games after mount', games);
    }

    //TODO comment on what this actually does
    componentWillReceiveProps(nextProps){
      let {viewedDate, games} = this.props;
      console.log('nextProps', nextProps);
      console.log('TESTING PROPS GAMES', games);
        if (this.props.viewedDate === nextProps.viewedDate)
            return false;
        this.props.fetchGames(nextProps.viewedDate);
        return true;
    }

    render() {
        //handles initial render to show loading of the games, probably need to refine tho
        console.log('games checking for render', this.props.games);
        let {games} = this.props;
        if (!games) {
            return (
                <div>
                  loading...
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
