/**
 * Created by ck111 on 4/13/2017.
 */
import React from 'react';
import {Link, IndexLink} from 'react-router';

export class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><IndexLink to="/">Scoreboard</IndexLink></li>
                            <li><Link to="standings">Standings</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}