/**
 * Created by ck111 on 4/13/2017.
 */
import React from 'react';
import {Link, IndexLink} from 'react-router';

export class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-faded">
                <div className="nav">
                    <h1 className="navbar-brand mb-0">Logo</h1>
                    <ul className="nav">
                        <li className="nav-item"><IndexLink to="/" className="nav-link">Scoreboard</IndexLink></li>
                        <li className="nav-item"><Link to="standings" className="nav-link">Standings</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}