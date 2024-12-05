import { useEffect, useRef, useState } from "react";

function GuessNumber() {
  const randomInt = useRef(null);
  const inputInt = useRef(null);
  const [text, setText] = useState("");
  
  useEffect(() => {
    randomInt.current = 1+ Math.floor(Math.random() * 10);
  }, []);

  function guessNum() {
    let {value : inputGuess} = inputInt.current;
    inputGuess = Number(inputGuess);
    const random = randomInt.current;
    
    if(inputGuess < random) {
      setText("Too low!");
    } else if(inputGuess > random) {
      setText("You win!");
    } else if(inputGuess == random) {
      setText("Too high!");
    }
  }

  return(
    <>
      <input ref={inputInt} type="text" />
      <button onClick={guessNum}>Guess!</button>
      <p>{text}</p>
    </>
  )
}

export default GuessNumber;