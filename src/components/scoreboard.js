import React from 'react';
import {connect} from 'react-redux';
import {fetchGamesFromApi} from '../actions/actionCreators';
import IndividualGames from './nba_scoreboard'

//to provide current date
Date.prototype.yyyymmdd = function() {
  let mm = this.getMonth() + 1; // getMonth() is zero-based
  let dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};
//defines date for use in the fetchGames
let date = new Date();

class Scoreboard extends React.Component{
  componentDidMount(){
    //when component mounts, makes call to get games data
    this.props.fetchGames(date.yyyymmdd());
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
  console.log('game props which are avaialble', this.props.games);
  return(
    <div className ='col-md-5 table-hover'>
        <h1>NBA Scores</h1>
          <IndividualGames />
        
    </div>
  )
  }
}

const mapStateToProps = (state)=>{
  return{
    games: state.gamesData.games
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
    fetchGames: (day) => dispatch(fetchGamesFromApi(day))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
