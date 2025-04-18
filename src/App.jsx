import { useState } from 'react'
import Start from './Components/Start'
import Game from './Components/Game'
import './Index.css'


// TODO: Manage my state here for: Level, score, how many cards


export default function App() {
  const [startGame, setStartGame] = useState(false)
 

  // TODO: On click of startGame, flip the startgame status


return (
  <>
  {!startGame? (
   <>
     <Start setStartGame={setStartGame}/> </>
     )
     :<Game/>}

  </>
)
}


