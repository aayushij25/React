import { useContext } from "react";
import { NewContext } from "./Parent.jsx";

function Child() {
  const dispatch = useContext(NewContext);
  console.log("rendering Child");

  function add() {
    dispatch({type:'UP', value: 1});
  }

  return (
    <>
      <button onClick={add}>UP</button>
    </>
  );
}

export default Child;