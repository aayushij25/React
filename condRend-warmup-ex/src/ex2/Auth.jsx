import { useState } from "react";

function Auth() {
  const [state, setState] = useState('');

  const pText = state === 'secret' ? "Successfully logged in!" : "Enter correct password";

  console.log(state, pText);

  function setPText(e) {
    setState(e.target.value);
  }

  return (
    <> 
      <input type="text" onChange={setPText} />
      <p>{pText}</p>
    </>
  )
}

export default Auth;