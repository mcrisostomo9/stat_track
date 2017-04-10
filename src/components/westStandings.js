import React from 'react';

export default class WestStandings extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const team = this.props.name[this.props.index];
    const info = this.props;
    return(
      <tr>
              <td>{info.index + 1}</td>
              <td>{info.name}</td>
              <td>{info.wins}</td>
              <td className='hideOnMobile'>{info.losses}</td>
          </tr>
        )
  }
}
