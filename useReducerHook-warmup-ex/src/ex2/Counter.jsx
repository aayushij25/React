import { useReducer } from "react";
import Button from "./Button.jsx";

function countReducer(prevState, action) {
  switch(action.type) {
    default:
      throw new Error("Invalid action type!");
    case "UP":
      return prevState + action.value;
    case "DOWN":
      return prevState - action.value;
    case "RESET":
      return 0; 
  }
}

function Counter() {
  const [count, dispatch] = useReducer(countReducer, 0);
  
  return (
    <>
      <h1>{count}</h1>
      <Button dispatch={dispatch} text='UP' action={{type: 'UP', value: 1}} />
      <Button dispatch={dispatch} text='DOWN' action={{type: 'DOWN', value: 1}} />
      <Button dispatch={dispatch} text='RESET' action={{type: 'RESET'}} />
    </>
  )
}

export default Counter;