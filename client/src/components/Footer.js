import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterGrid = styled.footer`
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
const StyledFooter = styled.footer`
  width: 100vw;
  height: 20px;
  background-color: #343a40;
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

const Footer = ()=> {
    return (
      <StyledFooter className="logo">
        {/* <ul>
          <li>
            <Link to="/">Games</Link>
            <Link to="/standings">Standings</Link>
          </li>
        </ul> */}
      </StyledFooter>
    )
}

export default Footer;