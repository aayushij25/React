import { useState } from "react"
import Button from "./Button.jsx";

function Profile() {
  const [text, setText] = useState("Logged In");
  return (
    <>
      <p>{text}</p>
      <Button setText={setText} text={text}/>
    </>
  )
}

export default Profile