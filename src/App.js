import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';

import Scoreboard from './routes/Scoreboard/Scoreboard';
import Standings from './routes/Standings/Standings';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Route exact path='/' component={ Scoreboard }/>
                <Route path='/standings' component={ Standings }/>
            </div>
        )
    }
}

export default App;
