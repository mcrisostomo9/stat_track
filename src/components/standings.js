import React from 'react';
import {connect} from 'react-redux';
import {fetchStandingsFromApi} from '../actions/actionCreators';
import WestStandings from './westStandings';
import EastStandings from './eastStandings';

class Standings extends React.Component{
  componentDidMount(){
    this.props.fetchStandings()
  }

  westTeams(){
    if(!this.props.standings){
      return <div>loading</div>
    }
    // to map through the returned standings data
    let {west} = this.props.standings;
    return west.map((team, index)=>{
      return <WestStandings name={team.teamId} key={index + team.teamId} wins={team.win} losses={team.loss} lastTenWin={team.lastTenWin} winPercent={team.winPctV2} gamesBehind={team.gamesBehind} index={index}/>
    })
  }

  eastTeams(){
    if(!this.props.standings){
      return <div>loading</div>
    }
    // to map through the returned standings data
    let {east} = this.props.standings;
    return east.map((team, index)=>{
      return <EastStandings name={team.teamId} key={index + team.teamId} wins={team.win} losses={team.loss} lastTenWin={team.lastTenWin} winPercent={team.winPctV2} gamesBehind={team.gamesBehind} index={index}/>
    })
  }

  render(){
    console.log('standingsData', this.props.standings);
    return(
      <div className="container row">
          <div className="col-lg-6 col-sm-12">
              <h3>            West Standings </h3>
              <table className="table table-sm table-hover table-bordered ">
                  <thead className="thead-inverse">
                      <tr className="card-header">
                          <th >#</th>
                          <th >Team</th>
                          <th >Wins</th>
                          <th >Losses</th>
                          <th className="hidden-md-down">Last Ten</th>
                          <th className="hidden-md-down">Win %</th>
                          <th className="hidden-md-down">GB</th>

                      </tr>
                  </thead>
                  <tbody className="card-block">
                      {this.westTeams()}
                  </tbody>
              </table>
            </div>
            <div className="col-lg-6 col-sm-12">
              <h3>East Standings</h3>
              <table className="table table-sm table-hover table-bordered ">
                  <thead className="thead-default">
                      <tr className="card-header">
                          <th>#</th>
                          <th >Team</th>
                          <th >Wins</th>
                          <th >Losses</th>
                          <th className="hidden-md-down">Last Ten</th>
                          <th className="hidden-md-down">Win %</th>
                          <th className="hidden-md-down">GB</th>
                      </tr>
                  </thead>
                  <tbody className="card-block">
                      {this.eastTeams()}
                  </tbody>
              </table>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    standings: state.standingsData.standings
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
    fetchStandings: () => dispatch(fetchStandingsFromApi())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Standings);
