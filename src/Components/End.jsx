import {useState} from 'react'

export default function End({setGameState}) {

    return (
        <div className="game-over">
            <h2>Game Over</h2>
            <p>You made it to level...</p>
            <button className="play-again" onClick={() => setGameState("start")}>Play Again?</button>
        </div>
    )
}