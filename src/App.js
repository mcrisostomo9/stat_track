import React, { Component } from 'react';
import nba from 'nba.js';
import axios from 'axios'; 
import $ from 'jquery';


class App extends Component {
  
  
  render() {
    // axios.get('http://data.nba.net/data/10s/prod/v1/20170404/scoreboard.json').then((res,err)=>{console.log(res)})
    nba.data.scoreboard({date: 20170405}).then((res,err)=>{console.log(res)})
    return (
      <div>
        STAT
      </div>
    );
  }
}

export default App;
