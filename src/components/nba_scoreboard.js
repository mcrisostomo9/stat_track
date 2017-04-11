import React, { Component }from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state)=>{
  return{
    games: state.gamesData.games
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
