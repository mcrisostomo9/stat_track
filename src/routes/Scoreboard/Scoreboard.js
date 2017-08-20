import React from 'react';
import GamesGrid from './GamesGrid';
import styled from 'styled-components';
import DateNavi from './DateNavi';

const Content = styled.div`
  background-color: white;
  margin: 3%;
  padding-top: 3%;
`;

const Scoreboard = ()=>{
    return(
        <Content>
            <DateNavi/>
            <GamesGrid/>
        </Content>
    )
}

export default Scoreboard;
