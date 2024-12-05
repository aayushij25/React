import { useState } from "react";
import useRerenderLogger from "./useRerenderLogger.jsx";

function Home() {
  useRerenderLogger("Home");

  const [count, setCount] = useState(0);

  return(
    <>
      <h1>Home</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Go up!</button>
    </>
  )
}

export default Home;