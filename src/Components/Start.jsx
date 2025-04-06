export default function Start({setStartGame}) {

    function handleStart() {
        setStartGame(true)
        console.log("Changed status")
      }


    return (
        <div className="start-game">
            <h2>Are you ready to begin? </h2>
            <button onClick={handleStart}>Lets Go</button> 
        </div>
    )
}