import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  justify-content: space-evenly;

  a {
    color: #fff;
    font-size: 1rem;
  }

  @media (max-width: 1500px) {
    font-size: 1.5vw;
  }
`;

const NavItems = () => {
  return (
    <LinkGrid>
      <div>
        <Link to="/">Scoreboard</Link>
      </div>
      <div>{/* <Link to="/games">Games</Link> */}</div>
      <div>
        <Link to="/standings">Standings</Link>
      </div>
      <div>{/* <Link to="/login">Login</Link> */}</div>
    </LinkGrid>
  );
};

export default NavItems;
