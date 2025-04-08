import { useState, useEffect } from "react";
import Timer from "./Timer";

export default function Game () {
    return (
        <>
        <h3>Level 1</h3>
        <Timer/>
        <div className="card"></div>
        </>
    )
}

// TODO: Countdown timer, level tracker, game cards