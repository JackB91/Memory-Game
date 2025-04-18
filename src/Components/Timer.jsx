import { useEffect, useState } from 'react'

export default function Timer ({timeLeft ,setTimeLeft}) {
const [countdownStarted,setCountdownStarted] = useState(true)

useEffect(() => {
    if (countdownStarted) {
        const countdownInterval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev > 0) return prev - 1
                clearInterval(countdownInterval)
                return 0
            })
        }, 1000)

        return () => clearInterval(countdownInterval)
    }
}, [countdownStarted])








return (
    <div className="countdown-timer">
     {timeLeft}   
    </div>
)

}