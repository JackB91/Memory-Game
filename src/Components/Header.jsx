import { useState } from 'react'


export default function Header () {
const [welcome,setWelcome] = useState("")

    return (
        <header className="header">
            <h1>Welcome!</h1>
        </header>
    )
}