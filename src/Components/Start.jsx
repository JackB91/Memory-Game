import { useEffect, useState } from 'react'
export default function Start({setGameState}) {
   const [welcomeMsg, setWelcomeMsg] = useState("Memory Game")
    const [welcome, setWelcome] = useState("")
    const [index ,setIndex] = useState(0)

    useEffect(() => {
        if (index < welcomeMsg.length) {
            const timeout = setTimeout(() => {
                setWelcome(prev => prev + welcomeMsg[index])
                setIndex(prev => prev + 1)
            },200)

            

            return () => clearTimeout(timeout)
        }

        else {
            const resetTimeout = setTimeout(() => {
                setWelcome("") 
                setWelcomeMsg("?????? ????")
                setIndex(0) 
               

            },2000)
        }
    }, [index, welcomeMsg])



// FIXME: Move this inside App??
    function handleStart() {
        setGameState("playing")
        console.log("Changed status")
      }


    return (
        <div className="start-game">
            <h1>{welcome}</h1>
            <h2 className='rules-title'>Rules</h2>
            <ul className="rules">
                <li>⏱ 60 seconds on clock</li>
                <li>🃏 6 cards to start</li>
                <li>🖱️ Click and match pairs</li>
                <li>➕ +10 seconds Per level</li>
                <li>🚀 How many levels can you reach?</li>
            </ul>
            <h2>Are you ready to begin? </h2>
            <button className="start-button" onClick={handleStart}>Lets Go</button> 
        </div>
    )
}