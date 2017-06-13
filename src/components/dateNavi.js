import React from 'react';
import {connect} from 'react-redux';
import {setViewedDate, fetchCalendarFromApi} from '../actions/actionCreators';
import Scoreboard from '../containers/scoreboardContainer';
import {Glyphicon} from "react-bootstrap";

class DateNavi extends React.Component{
  constructor(props){
    super(props);
    this.props.sendDate(new Date());
    this.props.dateFromApi().then(
        console.log('api date', this.props.endSeasonDate)
    );
  }
  previousDay(){
    let temp = this.props.unformattedDate;
    temp.setDate(temp.getDate()-1);
    this.props.sendDate(temp);
  }
  nextDay(){
    let temp = this.props.unformattedDate;
    temp.setDate(temp.getDate()+1);
    this.props.sendDate(temp);
  }

  render(){
      console.log('api date', this.props.endSeasonDate)
      return(
          <div>
              <div className="row">
                  <div className="col-xs-4 text-right">
                    <button className="btn btn-default" onClick={()=>this.previousDay()}><Glyphicon glyph="chevron-left"/>Previous</button>
                  </div>
                  <div className="col-xs-4 text-center">
                    <h4 className="date_longform">{this.props.viewedDateLongForm}</h4>
                  </div>
                  <div className="col-xs-4 text-left">
                    <button className="btn btn-default" onClick={()=>this.nextDay()}>Next<Glyphicon glyph="chevron-right"/></button>
                  </div>
              </div>
              <Scoreboard/>
          </div>
      )
  }
}

const mapStateToProps = (state)=>{
  return{
    viewedDate: state.setDate.viewedDate,
    viewedDateLongForm: state.setDate.viewedDateLongForm,
    unformattedDate: state.setDate.unformattedDate,
    endSeasonDate: state.endSeasonDate
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    sendDate: (day) => dispatch(setViewedDate(day)),
    dateFromApi: () => dispatch(fetchCalendarFromApi())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateNavi);
