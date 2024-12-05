import { useEffect, useState } from "react";
import Section from "./Section.jsx";

function Home() {
  const [count, setCount] = useState(0);

  function countIncre() {
    setCount(prevCount => prevCount + 1);
  }

  useEffect(() => {
    console.log("Home has re-rendered");
  });

  return (
    <>
      <h1>Visits: {count}</h1>
      <button onClick={countIncre}>+</button>
      <Section />
    </>
  )
}

export default Home;