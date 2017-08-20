import React from 'react';
import Games from './Games';
import {Glyphicon} from "react-bootstrap";
import styled from 'styled-components';
import FlexContainer from '../../components/FlexContainer';
import DateNavi from './DateNavi';

const ScoreboardGrid = styled.div`
  background-color: white;
  margin: 3%;
  padding-top: 3%;
 
`;



const Scoreboard = ()=>{
    return(
        <ScoreboardGrid>
            <DateNavi/>
            <Games/>
        </ScoreboardGrid>
    )
}

export default Scoreboard;
