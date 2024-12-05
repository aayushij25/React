import { createContext } from "react";
import Child from "./Child.jsx";

const FirstContext = createContext();
const SecondContext = createContext();

const numContext = 0;
const strContext = 'Zero';

function Parent() {
  return (
    <>
      <FirstContext.Provider value={numContext}>
        <SecondContext.Provider value={strContext}>
          <Child />
        </SecondContext.Provider>
      </FirstContext.Provider>
    </>
  );

}

export default Parent;
export {FirstContext};
export {SecondContext};