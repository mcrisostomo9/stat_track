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
                        <a href="/">LOGO</a>
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

// <nav className="navbar navbar-light bg-faded">
//     <div className="nav">
//         <h1 className="navbar-brand mb-0">Logo</h1>
//         <ul className="nav">
//             <li className="nav-item"><IndexLinkContainer to="/" className="nav-link">Scoreboard</IndexLinkContainer></li>
//             <li className="nav-item"><LinkContainer to="standings" className="nav-link">Standings</LinkContainer></li>
//         </ul>
//     </div>
// </nav>