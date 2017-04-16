import React from 'react';

const PlayoffGame = (props)=> {
  let {game} = props;
  let {startTime} = props;
  // for final score
  if(game.attendance > 0 && game.clock === ""){
  return(
        <div  className='card-deck'>
          <div className='card'>
                <div className='card-header'> GAME {game.playoffs.gameNumInSeries} FINAL</div>
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
                <div className='card-header'>{game.playoffs.seriesSummaryText}</div>
          </div>
        </div>
    )
  }
  //for game that hasnt started
  if(game.clock === "" && game.period.isHalftime === false){
    return(
      <div  className='card-deck'>
        <div className='card'>
              <div className='card-header'>GAME {game.playoffs.gameNumInSeries} Start time: {startTime}</div>
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
              <div className='card-header'>{game.playoffs.seriesSummaryText}</div>
        </div>
      </div>
  )
}
// for game in progress
return(
  <div  className='card-deck'>
    <div className='card'>
          {
            (game.clock === "")
            ? <div className='card-header'>Halftime</div>
            : <div className='card-header'>{game.clock} {game.period.current}Q</div>
        }
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
            <div className='card-header'>GAME {game.playoffs.gameNumInSeries} {game.playoffs.seriesSummaryText}</div>
    </div>
  </div>
)


}

export default PlayoffGame
