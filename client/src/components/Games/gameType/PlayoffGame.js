import React from "react";
import teams from "../../../data/teamInfo";
import styled from "styled-components";

const PlayoffGame = props => {
  let { game, startTime } = props;

  let homeTeam = teams.filter(homeTeam => {
    return homeTeam.teamId === game.hTeam.teamId;
  });
  let visitorTeam = teams.filter(visitorTeam => {
    return visitorTeam.teamId === game.vTeam.teamId;
  });

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
  // for final score
  if (
    game.attendance > 0 &&
    game.isGameActivated === false &&
    game.period.isHalftime === false
  ) {
    return (
      <IndividualGame>
        <div>
          <span>Game {game.playoffs.gameNumInSeries} - </span>
          <span> FINAL</span>
        </div>
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
        <div>{game.playoffs.seriesSummaryText}</div>
      </IndividualGame>
    );
  }

  //for game that hasnt started
  if (game.isGameActivated === false) {
    return (
      <IndividualGame>
        {game.playoffs.isIfNecessary === false ? (
          <div>
            <span>GAME {game.playoffs.gameNumInSeries} - </span>
            <span>Start time: {startTime}</span>
          </div>
        ) : (
          <div>
            <span>GAME {game.playoffs.gameNumInSeries} if necessary - </span>
            <span>Start time: {startTime}</span>
          </div>
        )}
        <div>
          <TeamLogo src={visitorTeam[0].logo} alt="" />
          {visitorTeam[0].fullName}
        </div>
        <div>
          <TeamLogo src={homeTeam[0].logo} alt="" />
          {homeTeam[0].fullName}
        </div>
        <div>{game.playoffs.seriesSummaryText}</div>
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
      <div>{game.playoffs.seriesSummaryText}</div>
    </IndividualGame>
  );
};

export default PlayoffGame;
