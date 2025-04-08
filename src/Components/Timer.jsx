import { useEffect, useState } from 'react'

export default function Timer () {

const [level, setLevel] = useState(1)
const [countdownStarted,setCountdownStarted] = useState(true)
const [timeLeft, setTimeLeft] = useState(30)

useEffect(() => {
    if (countdownStarted) {
        const countdowInterval = setInterval(() => {
            
            let remainingTime = timeLeft
            if (remainingTime > 0) {
                remainingTime-=1
            }

            setTimeLeft(remainingTime)
        },1000)

        return () => clearInterval(countdowInterval)
    }
},[countdownStarted,level,timeLeft])


return (
    <div className="countdown-timer">
     {timeLeft}   
    </div>
)

}