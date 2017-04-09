import React from 'react';
import {connect} from 'react-redux';
import {fetchStandingsFromApi} from '../actions/actionCreators';

class Standings extends React.Component{
  componentDidMount(){
    this.props.fetchStandings()
  }
  render(){
    if(!this.props.standings){
      return(
        <div>Loading standings</div>
      )
    }
    console.log('standings props', this.props.standings);
    return(
      <div>
        Standings placeholder
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
