import React, { Component }from 'react';
import { connect } from 'react-redux';
import teams from '../data/teamInfo';

class IndvidualGames extends React.Component{
  
  renderList(){
    
     return this.props.games.map((game, index) => {
       if (game.clock === ""){
         game.clock = 'Games has not started, yet.'
       }

        return (
             <div key = {index} className='card-deck'>
               <div className='card'>
               <div className='card-header'>{game.clock}</div>
               <table className ='table'>
                  <tbody>
                    <tr>
                      <ul>
                        <td>{game.vTeam.triCode}</td>
                            <td>23</td> 
                      </ul>
                      <ul>
                          <td> {game.hTeam.triCode} </td>
                          <td> 26 </td>
                      </ul>    
                    </tr>
                    </tbody> 
               <div className='card-footer'>Staple Center</div>     
                </table>
               </div>   
             </div>
           
               
        )
      })
   }
   render(){
   return(
        <div>
          {this.renderList()}
        </div>
    )
   }
}

const mapStateToProps = (state)=>{
  return{
    games: state.gamesData.games
  }
}
export default connect(mapStateToProps)(IndvidualGames);
