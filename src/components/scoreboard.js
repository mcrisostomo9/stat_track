import React from 'react';
import {connect} from 'react-redux';
import {fetchGamesFromApi} from '../actions/actionCreators';
import IndividualGames from './IndividualGames'

class Scoreboard extends React.Component{
  componentDidMount(){
    //when component mounts, makes call to get games data
    // this.props.fetchGames(date.yyyymmdd());
    // console.log('next props', nextProps);
    let {viewedDate} = this.props;
    console.log('props render viewedDate', viewedDate);

    this.props.fetchGames(viewedDate);
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
