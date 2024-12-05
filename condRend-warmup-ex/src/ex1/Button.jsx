import { useState } from "react";

function Button() {
  const [state, setState] = useState(true);

  const btnText = state ? "Loading..." : "Click me!";

  console.log(state, btnText);

  function setBtnText() {
    setState((prevState) => !prevState)
  }

  return (
    <>
      <button onClick={setBtnText}>{btnText}</button>
    </>
  )
}

export default Button;