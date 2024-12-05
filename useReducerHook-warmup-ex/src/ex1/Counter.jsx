import { useReducer } from "react";

function countReducer(prevState, action) {
  console.log({prevState}, {action});
  switch(action.type) {
    case "UP": 
      return prevState + action.value;
    case "DOWN": 
      return prevState - action.value;
    case "RESET": 
      return 0;
    default: 
      throw new Error("Invalid state!");
  }
}

function Counter() {
  const [count, dispatch] = useReducer(countReducer, 0);

  function add() {
    dispatch({type: "UP", value: 1});
  }

  function subtract() {
    dispatch({type: "DOWN", value: 1});
  }

  function reset() {
    dispatch({type: "RESET"});
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={subtract}>Down</button>
      <button onClick={add}>Up</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default Counter;