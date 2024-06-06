import Player from './Player'
import players from './Players'

function PlayerList() {
  
    return(
        
     
       <>
        {players.map((p, i)=>(<Player key={i} {...p}/>))}
       </>
    )}


export default PlayerList 
