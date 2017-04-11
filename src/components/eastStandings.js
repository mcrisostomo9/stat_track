import React from 'react';
import teams from '../data/teamInfo';

export default class EastStandings extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    //to filter the returned team id to have access to relevant team specific data
    let team = teams.filter((name)=>{
      return (name.teamId === info.name)
    });

    //to store the component props to info
    const info = this.props;

    return(
      <tr>
              {/* added 1 for standings since zero base */}
              <td>{info.index + 1}</td>
              <td>{team[0].fullName}</td>
              <td>{info.wins}</td>
              <td>{info.losses}</td>
          </tr>
        )
  }
}
