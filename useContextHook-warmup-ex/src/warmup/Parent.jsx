import { createContext } from "react";
import Child from "./Child.jsx";

const AuthContext = createContext();
const contextState = "I love monkeys";

function Parent() {
  return (
    <>
      <AuthContext.Provider value={contextState}>
        <Child />
      </AuthContext.Provider>
    </>
  )
}

export default Parent;
export {AuthContext};