import React from 'react';
import {connect} from 'react-redux';
import {setViewedDate} from '../actions/actionCreators';
import Scoreboard from '../containers/scoreboardContainer';
import {Glyphicon} from "react-bootstrap";

class DateNavi extends React.Component{
  constructor(props){
    super(props);
    this.props.sendDate(new Date());
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
      return(
          <div>
              <div className="row">
                  <div className="col-xs-4 text-right">
                    <button className="btn btn-default" onClick={()=>this.previousDay()}><Glyphicon glyph="chevron-left"/> Previous Day</button>
                  </div>
                  <div className="col-xs-4 text-center">
                    <h4>{this.props.viewedDateLongForm}</h4>
                  </div>
                  <div className="col-xs-4 text-left">
                    <button className="btn btn-default" onClick={()=>this.nextDay()}>Next day <Glyphicon glyph="chevron-right"/></button>
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
    unformattedDate: state.setDate.unformattedDate
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    sendDate: (day) => dispatch(setViewedDate(day)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateNavi);
