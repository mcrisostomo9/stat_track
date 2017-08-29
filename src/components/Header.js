import React from 'react';
import styled from 'styled-components';

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
  height: 10vh;
  width: 100vw;

`;

const HeaderTitle = styled.h1`
  font-weight: bold;
  font-size: 5rem;
  color: #fff;
`;

const Header = ()=> {
    return (

        <a href="/"><img src="../assets/ballcourt_white.png" alt=""/></a>
        <HeaderTitle>Pocket Stats</HeaderTitle>
      // </StyledHeader>
    )
}

export default Header;