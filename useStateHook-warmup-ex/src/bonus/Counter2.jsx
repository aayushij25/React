import { useState } from "react"

function Counter2() {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount((prevCount) => prevCount + 1); // setCount(0+1) => 1
    setCount((prevCount) => prevCount + 1); // setCount(1+1) => 2
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCount}>+</button>
    </>
  )
}

export default Counter2