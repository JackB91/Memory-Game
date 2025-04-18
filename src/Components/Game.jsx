import { useState, useEffect } from "react";
import Timer from "./Timer";
import Card from "./Card";



//generateing a pair for each value
function generatePairs (numPairs) {
  const cardValues = [];
  for (let i = 1; i<= numPairs; i++) {
    cardValues.push(i);
    cardValues.push(i);
  }
 
  return cardValues
}


//This method is called fisher yates
//Used to shuffle the deck
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length -1; i>0; i--) {
    let j = Math.floor(Math.random() *(i+1));
    [shuffled[i], shuffled[j]]= [shuffled[j],shuffled[i]]
  }
  return shuffled
}


//combine it all
function createShuffledDeck(numPairs) {
  let pairs = generatePairs(numPairs);
  return shuffleArray(pairs)
}


export default function Game () {

    const [cards,setCards] = useState(()=>createShuffledDeck(7))

    console.log(cards)


    return (
        <>
        <h3>Level 1</h3>
        <Timer/>
       <div className="card-grid">
        {cards.map((value,index)=> (
            <Card key={index} value={value}/>
        ))}
       </div>
        </>
    )
}

// TODO: Countdown timer, level tracker, game cards