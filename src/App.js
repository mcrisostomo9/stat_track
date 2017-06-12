import React, {Component} from 'react';
import {Header} from './components/header';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
