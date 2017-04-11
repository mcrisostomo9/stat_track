import React, { Component }from 'react';
import { connect } from 'react-redux';

class IndvidualGames extends React.Component{
  
  renderList(){
     return this.props.games.map((game, index) => {

        return (
             <div key = {index} className='card-deck'>
               <div className='card'>
               <div className='card-header'>Q4 3:01</div>
                  <div>
                   <div>{game.vTeam.triCode}</div>
                    <div>23</div> 
                      <h6>@</h6>
                   <div> {game.hTeam.triCode} </div>
                    <div> 26 </div>
               <div className='card-footer'>Staple Center</div>     
                </div> 
               </div>   
             </div>
             
                  /*tbody className='col-md-4'>
              <tr>
                <ul>        
                  <td>{game.hTeam.triCode}</td>
                  <td>120</td>
                </ul>  
               <ul>
                  <td>{game.vTeam.triCode}</td>
                  <td>92</td>
               </ul>   
              </tr>
            </tbody>      */

               
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
