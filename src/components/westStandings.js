import React from 'react';
import teams from '../data/teamInfo';

const WestStandings = (props)=> {
    //to store the component props to info
    const info = props;

    //to filter the returned team id to have access to relevant team specific data
    let team = teams.filter((name)=>{
      return (name.teamId === info.name)
    });
    return(
      <tr>
        {/* added 1 for standings since zero base */}
        <td>{info.index + 1}</td>
        <td>{team[0].fullName}</td>
        <td>{info.wins}</td>
        <td>{info.losses}</td>
        <td >{info.lastTenWin}-{10 - info.lastTenWin}</td>
        <td >{info.winPercent}</td>
        <td >{info.gamesBehind}</td>
    </tr>
        )
}

export default WestStandings;