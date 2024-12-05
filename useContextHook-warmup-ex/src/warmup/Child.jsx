import { useContext } from "react";
import { AuthContext } from "./Parent.jsx";

function Child() {
  const contextState = useContext(AuthContext);

  return (
    <>
      <h1>{contextState}</h1>
    </>
  )
}

export default Child;