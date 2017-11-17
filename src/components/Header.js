import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 3fr 1 fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: end;
  padding: 5px 0;
  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1024px 1fr;
  }
`;

// Made a new header to style
const StyledNavBar = styled.header`
  width: 100vw;
  background-color: #333333;
  border-radius: 0.75em;
  box-shadow: 0 7px 6px -6px #777;
  
  > * {
    display: inline-block;
    margin: 15px;
    vertical-align: middle;   
  }

  a img {
    width: 50%;
  }
`;

const HeaderTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;
  color: #fff;
`;

// Removed StyledHeader and now adding StyledNavBar
const Header = ()=> {
    return (
      <StyledNavBar className="logo">
        <a href="/"><img src="../assets/ballcourt_white.png" alt=""/></a>
        <HeaderTitle>Pocket Stats</HeaderTitle>
        <ul>
          <li>
            <Link to="/">Games</Link>
            <Link to="/standings">Standings</Link>
          </li>
        </ul>
        {/* <Link to="/standings">Standings</Link>  */}
      </StyledNavBar>
    )
}

export default Header;