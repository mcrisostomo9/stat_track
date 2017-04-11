import React, {Component} from 'react';
import Scoreboard from './components/scoreboard';
import Standings from './components/standings';

class App extends Component {
    render() {
        return (
            <div>
              <Scoreboard/>
              <Standings/>
            </div>
        )
    }
}

export default App;
