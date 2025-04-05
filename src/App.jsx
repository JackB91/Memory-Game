import { useState } from 'react'
import Header from './Components/Header'
import Start from './Components/Start'
import './Index.css'


// TODO: Manage my state here for: Level, score, how many cards

export default function App() {
  const [count, setCount] = useState(0)

return (
  <>
  <Header/>
  <Start/>
  </>
)
}


