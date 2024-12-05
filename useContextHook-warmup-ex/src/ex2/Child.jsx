import { useContext } from "react";
import { FirstContext, SecondContext } from "./Parent.jsx";

function Child() {
  const numContext = useContext(FirstContext);
  const strContext = useContext(SecondContext);
  return (
    <>
      <p>{numContext}</p>
      <p>{strContext}</p>
    </>
  );
}

export default Child;