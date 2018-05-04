import React from "react";
import teams from "../../../data/teamInfo";
import styled from "styled-components";

const TeamDisplay = styled.div`
  position: relative;
`;

const TeamLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 3%;
`;

const Score = styled.div`
  display: inline-block;
  position: absolute;
  right: 0;
`;

const IndividualGame = styled.div`
  background-color: papayawhip;
  display: grid;
  grid-template-rows: 1fr 2fr 2fr;
  grid-row-gap: 1em;
  padding: 1em;
  border: 1px solid #a2a2a2;
  border-radius: 4px;
  cursor: pointer;
`;

const RegularGame = props => {
  const { game, startTime } = props;

  const homeTeam = teams.filter(homeTeam => {
    return homeTeam.teamId === game.hTeam.teamId;
  });
  const visitorTeam = teams.filter(visitorTeam => {
    return visitorTeam.teamId === game.vTeam.teamId;
  });

  // for final score
  if (
    game.attendance > 0 &&
    game.isGameActivated === false &&
    game.period.isHalftime === false
  ) {
    return (
      <IndividualGame>
        <div>Final Score</div>
        <TeamDisplay>
          <TeamLogo src={visitorTeam[0].logo} alt="" />
          {visitorTeam[0].fullName}
          <Score>{game.vTeam.score}</Score>
        </TeamDisplay>
        <TeamDisplay>
          <TeamLogo src={homeTeam[0].logo} alt="" />
          {homeTeam[0].fullName}
          <Score>{game.hTeam.score}</Score>
        </TeamDisplay>
      </IndividualGame>
    );
  }
  //for game that hasnt started
  if (game.isGameActivated === false) {
    return (
      <IndividualGame>
        <div>Start time: {startTime}</div>
        <div>
          <TeamLogo src={visitorTeam[0].logo} alt="" />
          {visitorTeam[0].fullName}
        </div>
        <div>
          <TeamLogo src={homeTeam[0].logo} alt="" />
          {homeTeam[0].fullName}
        </div>
      </IndividualGame>
    );
  }
  // for game in progress
  return (
    <IndividualGame>
      {game.period.isHalftime === true ? (
        <div>Halftime</div>
      ) : game.period.current === 0 ? (
        <div>Start time: {startTime}</div>
      ) : (
        <div>
          Q{game.period.current} - {game.clock}
        </div>
      )}
      <div>
        <TeamDisplay>
          <img
            className="nba_team_images_scoreboard"
            src={homeTeam[0].logo}
            alt=""
          />{" "}
          {homeTeam[0].fullName}
          <Score>{game.hTeam.score}</Score>
        </TeamDisplay>
      </div>
      <div>
        <TeamDisplay>
          <img
            className="nba_team_images_scoreboard"
            src={visitorTeam[0].logo}
            alt=""
          />{" "}
          {visitorTeam[0].fullName}
          <Score>{game.vTeam.score}</Score>
        </TeamDisplay>
      </div>
    </IndividualGame>
  );
};

export default RegularGame;
