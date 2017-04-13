import React from 'react';
import {connect} from 'react-redux';
import {setViewedDate} from '../actions/actionCreators';
import Scoreboard from './scoreboard';

class DateNavi extends React.Component{
  constructor(props){
    super(props);
    this.props.sendDate(new Date());
  }
  previousDay(){
    // console.log('date prior', this.props.viewedDateLongForm);
    let temp = this.props.unformattedDate;
    temp.setDate(temp.getDate()-1);
    console.log('setting date', temp);
    this.props.sendDate(temp);

  }
  render(){
    console.log('unformattedDate', this.props.unformattedDate);

    return(
      <div>
        <button className="btn btn-outline-primary" onClick={()=>this.previousDay()}>Previous Day</button>
        <h4>{this.props.viewedDateLongForm}</h4>
        <button className="btn btn-outline-primary">Next day</button>
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
    sendDate: (day) => dispatch(setViewedDate(day))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateNavi);
