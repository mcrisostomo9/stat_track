import React, {Component} from 'react';
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
                <Header/>
                <div >
                    { this.props.children }
                </div>
            </PageContainer>
        )
    }
}

export default App;
