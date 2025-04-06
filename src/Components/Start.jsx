
export default function Start({setStartGame}) {
    function handleStart() {
        setStartGame(true)
        console.log("Changed status")
      }


    return (
        <div className="start-game">
            <h3>Rules</h3>
            <ul className="rules">
                <li>⏱ 30 seconds on clock</li>
                <li>🃏 6 cards</li>
                <li>➕ +10 seconds Per level</li>
                <li>🚀 How many levels can you reach</li>
            </ul>
            <h2>Are you ready to begin? </h2>
            <button className="start-button" onClick={handleStart}>Lets Go</button> 
        </div>
    )
}