import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  width: 100vw;
  background-color: #343a40;
  box-shadow: 0 7px 6px -6px #777;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  padding: 5px 0;
  // @media (min-width: 1025px) {
  //   grid-template-columns: 1fr 1024px 1fr;

  // }

  img {
    width: 75%;
  }
`;

const HeaderTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;
  color: #fff;

  @media (max-width: 420px) {
    font-size: 2rem;

  }
`;

const Header = ()=> {
    return (
      <StyledHeader className="logo">
        <img src="../assets/ballcourt_white.png" alt=""/>
        <HeaderTitle>Pocket Stats</HeaderTitle>
        <ul>
          <li>
            <Link to="/">Games</Link>
            <Link to="/standings">Standings</Link>
          </li>
        </ul>
      </StyledHeader>
    )
}

export default Header;