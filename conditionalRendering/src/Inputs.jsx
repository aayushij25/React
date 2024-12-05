import { useState } from "react";

function Inputs() {
  const [inputState, setInputState] = useState("");

  function handleClick(e) {
    console.log(e.target.value);
    setInputState(e.target.value);

  }

  function renderPopup() {
    switch(inputState) {
      case 'meow': return <h1>🐱</h1>
      case 'woof': return <h1>🐶</h1>
      case 'rawr': return <h1>🦁</h1>
      default: return null;
    }
  }

  return(
    <>
      <label htmlFor="inputMeow">
        Meow
        <input id="inputMeow" type="radio" name="demo" value="meow" onClick={handleClick} />
      </label>
      <label htmlFor="inputWoof">
        Woof
        <input id="inputWoof" type="radio" name="demo" value="woof" onClick={handleClick} />
      </label>
      <label htmlFor="inputRawr">
        Rawr
        <input id="inputRawr" type="radio" name="demo" value={"rawr"} onClick={handleClick} />
      </label>
      {renderPopup()}
    </>
  )

}

export default Inputs;