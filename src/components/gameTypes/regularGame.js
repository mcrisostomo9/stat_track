import React from 'react';

const RegularGame = (props)=> {
  let {game} = props;

  // for final score
  if(game.attendance > 0 && game.clock === ""){
  return(
        <div  className='card-deck'>
          <div className='card'>
                <div className='card-header'>FINAL SCORE</div>
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
                </table>
          </div>
        </div>
    )
  }
  //for game that hasnt started
  if(game.clock === ""){
    return(
      <div  className='card-deck'>
        <div className='card'>
              <div className='card-header'>Start time: {props.startTime}</div>
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
              </table>
        </div>
      </div>
  )
}
// for game in progress
return(
  <div  className='card-deck'>
    <div className='card'>
          <div className='card-header'>{game.clock} {game.period.current}Q</div>
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
          </table>
    </div>
  </div>
)


}

export default RegularGame
