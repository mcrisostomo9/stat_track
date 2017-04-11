import React from 'react';
import teams from '../data/teamInfo';

export default class WestStandings extends React.Component{
  render(){
    //to store the component props to info
    const info = this.props;

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
        <td className="hidden-md-down">{info.lastTenWin}-{10 - info.lastTenWin}</td>
        <td className="hidden-md-down">{info.winPercent}</td>
        <td className="hidden-md-down">{info.gamesBehind}</td>
    </tr>
        )
  }
}
