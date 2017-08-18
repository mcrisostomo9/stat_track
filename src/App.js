import React, {Component} from 'react';
import HeaderOld from './components/HeaderOld';
import Header from './components/Header';
import styled from 'styled-components';


const PageContainer = styled.div`
  background: url(${require('./assets/bg.jpg')}) repeat;
  overflow: hidden;
  height: 100vh;
`;


class App extends Component {
    render() {
        return (
            <PageContainer>
                {/*<div>*/}
                    {/*<div>*/}
                        {/*<HeaderOld/>*/}
                        <Header/>
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div >*/}
                    <div >
                        { this.props.children }
                    </div>
                {/*</div>*/}
            </PageContainer>
        )
    }
}

export default App;
