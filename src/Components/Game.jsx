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
    const [level, setLevel] = useState(1)
    const [timeLeft, setTimeLeft] = useState(30)
    const [cards,setCards] = useState(()=>createShuffledDeck(2))
    const [selectedCards,setSelectedCards] = useState([])

    const [matchedCards, setMatchedCards] = useState([])

    // const [match, setMatch]= useState(false)

    



//This will flip my card but only allow two flipped at a time
    function handleCardClick(index) {
        if (selectedCards.length < 2 && !selectedCards.includes(index)) {
            setSelectedCards(prev => [...prev, index])
        }
    }


    function handleMatch() {
          const [firstIndex, secondIndex] = selectedCards;
          if (cards[firstIndex] === cards[secondIndex]) {
            console.log("It's a MATCH");
            setMatchedCards(prev => [...prev, firstIndex,secondIndex])
          } else {
            console.log("Not a match");
          }
      }


      useEffect(() => {
        if (selectedCards.length === 2) {
          setTimeout(() => {
            handleMatch();
            setSelectedCards([]); // Reset for next turn
          }, 1000); 
        }
      }, [selectedCards]);
      

      //Handle when to level up
    //   TODO:

    //   useEffect (() => {

    //   })
   
    return (
        <div className="game-container">
        <h3>Level {level}</h3>
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>
       <div className="card-grid">
        {cards.map((value,index)=> (
            <Card 
                key={index} 
                value={selectedCards.includes(index) || matchedCards.includes(index)? 
                    value
                    :null} 
                onClick={()=> handleCardClick(index)}
                isMatched={matchedCards.includes(index)}/>
        ))}
       </div>
        </div>
    )
}

// TODO: Countdown timer, level tracker, game cards