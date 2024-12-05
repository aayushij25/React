import { useRef } from "react";

function Input() {
  const inpRef = useRef(null);

  function setFocusToInp() {
    inpRef.current.focus();
  }

  return (
    <>
      <input ref={inpRef} type="text"/>
      <button onClick={setFocusToInp}>Focus</button>
    </>
  )
}

export default Input;