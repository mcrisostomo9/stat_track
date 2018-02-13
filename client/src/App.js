import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';

// import Boxscores from './routes/Boxscores/Boxscores';
import Scoreboard from './routes/Scoreboard/Scoreboard';
import Standings from './routes/Standings/Standings';

class App extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Route exact path='/' component={ Scoreboard }/>
                {/* <Route path='/boxscores' component={ Boxscores }/> */}
                <Route path='/standings' component={ Standings }/>
                <Footer/>
            </Container>
        )
    }
}

export default App;
