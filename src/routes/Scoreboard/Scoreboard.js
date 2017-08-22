import React from "react";
import GamesGrid from "./GamesGrid";
import styled from "styled-components";
import DateNavi from "./DateNavi";

const Content = styled.div`
  background-color: #465e9b;
  margin: 3%;
  padding-top: 3%;
  border-radius: 1em;
`;

const Scoreboard = () => {
  return (
    <Content className="gameContainer">
      <DateNavi />
      <GamesGrid />
    </Content>
  );
};

export default Scoreboard;
