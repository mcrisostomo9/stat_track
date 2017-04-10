import React from 'react';
import teams from '../data/teamInfo';

export default class EastStandings extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const info = this.props;
    let team = teams.filter((name)=>{
      return (name.teamId === info.name)
    });
    return(
      <tr>
              <td>{info.index + 1}</td>
              <td>{team[0].fullName}</td>
              <td>{info.wins}</td>
              <td>{info.losses}</td>
          </tr>
        )
  }
}
