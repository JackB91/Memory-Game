import { useState } from 'react'
import Start from './Components/Start'
import Game from './Components/Game'
import End from './Components/End'
import './Index.css'


// TODO: Manage my state here for: Level, score, how many cards


export default function App() {
  const [gameState, setGameState] = useState('start')
  const [level, setLevel] = useState(1)
 

return (
  <>
     {gameState === 'start' && <Start setGameState = {setGameState}/>}
     {gameState === 'playing' && <Game setGameState = {setGameState} level ={level} setLevel = {setLevel}/>}
     {gameState === 'end' && <End setGameState = {setGameState} level ={level}/>}

  </>
)
}


