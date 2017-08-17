import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 3fr 1 fr;
  grid-template-rows: auto;
  background-color: #666;
  justify-items: center;
  align-items: end;
  margin: 0 20px 20px 20px;
  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1024px 1fr;
  }
`;

const HeaderTitle = styled.h1`
  font-weight: bold;
  font-size: 11rem;

`;







const Header = ()=> {
    return (
        <StyledHeader>
            <a href="/"><img src="../assets/ballcourt_white.png" alt=""/></a>
            <HeaderTitle>Pocket Stats</HeaderTitle>
        </StyledHeader>

    )
}

export default Header;