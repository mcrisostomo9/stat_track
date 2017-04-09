import React from 'react';
import {connect} from 'react-redux';
import {fetchGamesFromApi} from '../actions/actionCreators';

class Scoreboard extends React.Component{
  componentDidMount(){
    this.props.fetchGames(20170406)
  }
  render(){
    console.log('this is the state', this.state);
    return(
      <div>
          Hello its me, Mario
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    games: state.gamesData
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
    fetchGames: (day) => dispatch(fetchGamesFromApi(day))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
