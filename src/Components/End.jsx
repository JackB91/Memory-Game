import {useState} from 'react'

export default function End({setGameState, level}) {

    return (
        <div className="game-over">
            <h2>Game Over!</h2>
            <p>You made it to level {level}</p>
            <button className="play-again" onClick={() => setGameState("playing")}>Play Again?</button>
        </div>
    )
}