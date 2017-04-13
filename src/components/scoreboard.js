import React from 'react';
import {connect} from 'react-redux';
import {fetchGamesFromApi} from '../actions/actionCreators';
import IndividualGames from './IndividualGames'

class Scoreboard extends React.Component{

  componentDidMount(){
    let {viewedDate} = this.props;
    this.props.fetchGames(viewedDate);
  }
  shouldComponentUpdate(nextProps){
    console.log('props comparison', this.props.viewedDate);
    console.log('nextProps', nextProps.viewedDate);
    if (this.props.viewedDate === nextProps.viewedDate) return false;
          this.props.fetchGames(nextProps.viewedDate);
          return true;
  }

  render(){
  //handles initial render to show loading of the games, probably need to refine tho
  if(!this.props.games){
    return(
      <div>
        loading games...
      </div>
    )
  }
  console.log('game props scoreboard', this.props.games);

  return(
    <div className='col-md-5 table-hover'>
        <h1>NBA Scores</h1>
          <IndividualGames />

    </div>
  )
  }
}

const mapStateToProps = (state)=>{
  return{
    games: state.gamesData.games,
    viewedDate: state.setDate.viewedDate
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    fetchGames: (day) => dispatch(fetchGamesFromApi(day))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
