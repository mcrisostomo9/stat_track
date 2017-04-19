/**
 * Created by ck111 on 4/13/2017.
 */
import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

export class Header extends React.Component{
    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/"><img src="../assets/ballcourt_white.png" alt=""/></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <IndexLinkContainer to='/'><NavItem>Scoreboard</NavItem></IndexLinkContainer>
                        <LinkContainer to='/standings' ><NavItem>Standings</NavItem></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
