import React from "react";
import GamesGrid from "./GamesGrid";
import styled from "styled-components";
import DateNavi from "./DateNavi";

// Adjusted box shadow and content height -Andy
const Content = styled.div`
  background-color: #465e9b;
  margin: 3%;
  padding-top: 3%;
  border-radius: 1em;
  box-shadow: 0 7px 6px -6px #777;
  
`;

const Scoreboard = () => {
  return (
    <Content>
      <DateNavi />
      <GamesGrid />
    </Content>
  );
};

export default Scoreboard;
