import { useState } from 'react'
import Start from './Components/Start'
import Game from './Components/Game'
import End from './Components/End'
import './Index.css'


// TODO: Manage my state here for: Level, score, how many cards


export default function App() {
  // const [startGame, setStartGame] = useState(false)
  const [gameState, setGameState] = useState('start')
 

  // TODO: On click of startGame, flip the startgame status


return (
  <>
  {/* {!startGame? (
   <>
     <Start setStartGame={setStartGame}/> </>
     )
     :<Game/>} */}

     {gameState === 'start' && <Start setGameState = {setGameState}/>}
     {gameState === 'playing' && <Game setGameState = {setGameState}/>}
     {gameState === 'end' && <End setGameState = {setGameState}/>}

  </>
)
}


