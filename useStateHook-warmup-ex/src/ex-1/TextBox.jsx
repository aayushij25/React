import { useState } from "react"

function TextBox() {
  let [text, setText] = useState("");
  function handleInputChange(e) {
    console.log(e.target.value);
    setText(e.target.value);
  }
  return (
    <>
      <h1>{text}</h1>
      <input type="text" onInput={handleInputChange} />
    </>
  )
}

export default TextBox