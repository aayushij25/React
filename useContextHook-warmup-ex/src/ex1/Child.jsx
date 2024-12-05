import { useContext } from "react";
import { NewContext } from "./Parent.jsx";

function Child() {
  const [state, setState] = useContext(NewContext);
  function change() {
    setState('FINISH');
  }
  return (
    <>
      <h1>{state}</h1>
      <button onClick={change}>Click me!</button>
    </>
  )
}

export default Child;