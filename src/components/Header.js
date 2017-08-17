import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 90% 1fr;
  grid-template-rows: 15px 100px auto;

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1024px 1fr;
  }
`;




const Header = ()=> {
    return (
        <StyledHeader>

        </StyledHeader>

    )
}

export default Header;