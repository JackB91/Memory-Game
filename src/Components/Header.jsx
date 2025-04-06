import { useEffect, useState } from 'react'


export default function Header () {
    const welcomeMsg = "Memory Game"
    const [welcome, setWelcome] = useState("")
    const [index ,setIndex] = useState(0)

    useEffect(() => {
        if (index < welcomeMsg.length) {
            const timeout = setTimeout(() => {
                setWelcome(prev => prev + welcomeMsg[index])
                setIndex(prev => prev + 1)
            },150)

            

            return () => clearTimeout(timeout)
        }

        else {
            const resetTimeout = setTimeout(() => {
                setWelcome("") 
                // setIndex(0) FIXME: Just stopped the loop as i work on it

            },2000)
        }
    }, [index, welcomeMsg])


    return (
        <header className="header">
            <h1>{welcome}</h1>
        </header>
    )
}