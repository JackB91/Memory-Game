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
    // TODO: USEEFFECT??

    const [cards,setCards] = useState(()=>createShuffledDeck(2))
    const [selectedCards,setSelectedCards] = useState([])



//This will flip my card but only allow two flipped at a time
    function handleCardClick(index) {
        if (selectedCards.length < 2 && !selectedCards.includes(index)) {
            setSelectedCards(prev => [...prev, index])
        }
    }
   

// TODO: Just for testing to flip back cards
    useEffect(() => {
        if (selectedCards.length === 2) {
          setTimeout(() => {
            setSelectedCards([]);
          }, 1000); // delay before flipping back
        }
      }, [selectedCards]);
      


    return (
        <div className="game-container">
        <h3>Level 1</h3>
        <Timer/>
       <div className="card-grid">
        {cards.map((value,index)=> (
            <Card key={index} value={selectedCards.includes(index)? value:null} onClick={()=> handleCardClick(index)}/>
        ))}
       </div>
        </div>
    )
}

// TODO: Countdown timer, level tracker, game cards