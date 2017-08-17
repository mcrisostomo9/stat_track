import React, {Component} from 'react';
import HeaderOld from './components/HeaderOld';
import Header from './components/Header'

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        {/*<HeaderOld/>*/}
                        <Header/>
                    </div>
                </div>
                <div >
                    <div >
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
