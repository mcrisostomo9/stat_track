import React, {Component} from 'react';
import nba from 'nba.js';
// import {connect} from 'react-redux';
// import {fetchGamesFromServer} from './actions/actionCreators';
import Scoreboard from './components/scoreboard';

class App extends Component {
    constructor(){
      super();
      this.state = {
        games: ''
      }
    }
    componentDidMount() {
        nba.data.scoreboard({date: 20170406}).then(res => {
          this.setState({games: res.games})
        })
    }
    render() {
        return (
            <div>
              <Scoreboard gamesData={this.state.games}/>
            </div>
        )
    }
}

export default App;
