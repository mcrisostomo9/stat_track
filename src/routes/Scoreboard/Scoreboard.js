import React from 'react';
import {connect} from 'react-redux';
import {setViewedDate, fetchCalendarFromApi} from '../../actions/actionCreators';
import ScoreboardContainer from './ScoreboardContainer';
import {Glyphicon} from "react-bootstrap";

class Scoreboard extends React.Component{
  constructor(props){
    super(props);
    this.props.dateFromApi();
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
      const { endSeasonDate, viewedDate } = this.props;
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
                    {/*conditional to disable button for the end of the season*/}
                    {
                     (viewedDate < endSeasonDate) ?
                         (<button className="btn btn-default" onClick={()=>this.nextDay()}>Next<Glyphicon glyph="chevron-right"/></button>):
                         (<button className="btn btn-default disabled" disabled="disabled" onClick={()=>this.nextDay()}>Next<Glyphicon glyph="chevron-right"/></button>)
                    }
                  </div>
              </div>
              <ScoreboardContainer/>
          </div>
      )
  }
}

const mapStateToProps = (state)=>{
  return{
    viewedDate: state.setDate.viewedDate,
    viewedDateLongForm: state.setDate.viewedDateLongForm,
    unformattedDate: state.setDate.unformattedDate,
    endSeasonDate: state.setDate.endSeasonDate
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    sendDate: (day) => dispatch(setViewedDate(day)),
    dateFromApi: () => dispatch(fetchCalendarFromApi())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
