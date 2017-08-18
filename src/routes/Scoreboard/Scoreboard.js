import React from 'react';
import {connect} from 'react-redux';
import {setViewedDate, fetchCalendarFromApi} from '../../actions/actionCreators';
import Games from './Games';
import {Glyphicon} from "react-bootstrap";
import styled from 'styled-components';

const ScoreboardGrid = styled.div`
  background-color: white;
  margin: 3%;
  padding-top: 3%;
  min-height: 700px;
`;

const DateButton = styled.button`
  outline: none;
`;

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
      return(
          <ScoreboardGrid>
              <div className="row">
                  <div className="col-xs-4 text-right">
                    <DateButton className="btn btn-default" onClick={()=>this.previousDay()}><Glyphicon glyph="chevron-left"/>Previous</DateButton>
                  </div>
                  <div className="col-xs-4 text-center">
                    <h4 className="date_longform">{this.props.viewedDateLongForm}</h4>
                  </div>
                  <div className="col-xs-4 text-left">
                     <DateButton className="btn btn-default" onClick={()=>this.nextDay()}>Next<Glyphicon glyph="chevron-right"/></DateButton>
                  </div>
              </div>
              <Games/>
          </ScoreboardGrid>
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
