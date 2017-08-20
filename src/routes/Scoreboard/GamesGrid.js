import React from 'react';
import {connect} from 'react-redux';
import {fetchGamesFromApi} from '../../actions/actionCreators';
import Game from '../../components/Games/Game'
import styled from 'styled-components';

const GamesGridContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  justify-items: center;
  grid-row-gap: 1rem;
  grid-template-rows: 1fr;
`;

const LogoImage = styled.img`
  width: 10rem;
`;


class GamesGrid extends React.Component {
  //make call to fetch game on mount
  componentDidMount() {
    let {viewedDate} = this.props;
    this.props.fetchGames(viewedDate);
  }

  //To handle the re-rendering when the viewedDate state changes
  componentWillReceiveProps(nextProps) {
    let {viewedDate} = this.props;
    if (viewedDate === nextProps.viewedDate)
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
          loading...
        </div>
      )
    }
    if (games.length === 0 || this.props.noGames) {
      return (
        <GamesGridContainer>
          <div className="col-xs-6 col-xs-offset-3 text-center">
            <img src="../assets/hoop_color_2.png" alt=""/>
            <h4>NO GAMES SCHEDULED</h4>
          </div>
        </GamesGridContainer>
      )
    }
    return (
        <GamesGridContainer>
            <div>
                <LogoImage src="../assets/hoop_color_2.png" alt=""/>
            </div>
            <Game/>
        </GamesGridContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
          games: state.gamesData.games,
          viewedDate: state.setDate.viewedDate,
          noGames: state.gamesData.noGames
         }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGames: (day) => dispatch(fetchGamesFromApi(day))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesGrid);
