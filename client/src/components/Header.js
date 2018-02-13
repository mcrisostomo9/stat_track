import React, { Component } from 'react';
import styled from 'styled-components';

import FlexContainer from './FlexContainer';
import Menu from './Menu';
import NavItems from './NavItems';

const StyledHeader = styled.header`
  width: 100vw;
  height: 68px;
  background-color: #343a40;
  box-shadow: 0 7px 6px -6px #777;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;

  @media (min-width: 1400px) {
    grid-template-columns: 1fr 16fr 4fr;
  }

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 10fr 5fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 2fr 6fr 2fr;
  }

  img {
    width: 60%;
    height: 100%;
  }
`;

const HeaderTitle = styled.div`
  font-weight: bold;
  font-size: 2rem;
  color: #fff;
  align-self: center;
  justify-self: start;
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: false
    }

    this.checkHeaderSize = this.checkHeaderSize.bind(this);
  }
  componentDidMount() {
    this.checkHeaderSize();
    window.addEventListener("resize", this.checkHeaderSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkHeaderSize);
  }

  checkHeaderSize() {
    this.setState({
      mobile: window.innerWidth > 768
    });
  }

  render() {
    const { mobile } = this.state;

    return (
      <StyledHeader className="logo">
        <FlexContainer>
          <img src="../assets/ballcourt_white.png" alt=""/>
        </FlexContainer>
        <HeaderTitle>Pocket Stats</HeaderTitle>
        { mobile ? <NavItems /> : <Menu /> }
      </StyledHeader>
    )
  }
}

export default Header;