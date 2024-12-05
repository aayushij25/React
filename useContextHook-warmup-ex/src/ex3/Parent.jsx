import { createContext, useReducer } from "react";
import Child from "./Child.jsx";

const NewContext = createContext();

function actionReducer(prevState, action) {
  switch(action.type) {
    default:
      throw new Error("Invalid action type");
    case 'UP':
      return prevState + action.value;
  }
}

function Parent() {
  const [counter, dispatch] = useReducer(actionReducer, 0);
  console.log("rendering Parent");
  return (
    <>
      <h1>{counter}</h1>
      <NewContext.Provider value={dispatch}>
        <Child />
      </NewContext.Provider>
    </>
  );

}

export default Parent;
export {NewContext};