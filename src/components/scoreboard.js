import React from 'react';
import {connect} from 'react-redux';
import {fetchGamesFromApi} from '../actions/actionCreators';

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
   renderList(){
     return this.props.games.map((game, index) => {
        return (
          <div>
            {game.hTeam.triCode}<br></br>
            {game.vTeam.triCode}<br></br>
          </div>
        )
      })
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
    <div>
        <h1>This is what is rendering</h1>
        <ul className='list-group ' > 
          {this.renderList()} 
        </ul>
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
