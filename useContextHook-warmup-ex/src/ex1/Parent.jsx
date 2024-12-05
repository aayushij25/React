import { createContext, useState } from "react";
import Child from "./Child.jsx";

const NewContext = createContext();

function Parent() {
  const [state, setState] = useState('START');

  return (
    <>
      <NewContext.Provider value={[state, setState]}>
        <Child />
      </NewContext.Provider>
    </>
  )

}

export default Parent;
export {NewContext};