import React, { Component }from 'react';
import { connect } from 'react-redux';
// import teams from '../data/teamInfo';

class IndvidualGames extends Component{

  renderList(){

     return this.props.games.map((game, index) => {
       if (game.clock === ""){
         game.clock='Games has not started, yet.'
       }

        return (
             <div key={index} className='card-deck'>
               <div className='card'>
               <div className='card-header'>{game.clock}</div>
               <table className='table'>
                  <tbody>
                    <tr>
                      <ul>
                        <td>{game.vTeam.triCode}</td>
                            <td>{game.vTeam.score}</td>
                      </ul>
                      <ul>
                          <td> {game.hTeam.triCode} </td>
                          <td> {game.hTeam.score} </td>
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
