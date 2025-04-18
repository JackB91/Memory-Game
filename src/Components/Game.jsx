import { useState, useEffect } from "react";
import Timer from "./Timer";
import Card from "./Card";

export default function Game () {
    return (
        <>
        <h3>Level 1</h3>
        <Timer/>
       <Card/>
        </>
    )
}

// TODO: Countdown timer, level tracker, game cards