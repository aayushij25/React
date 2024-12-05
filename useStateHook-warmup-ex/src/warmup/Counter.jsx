import { useState } from "react"

function Counter() {
  let [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <>
      <h1>Counter:  {count}</h1>
      <button onClick={decreaseCount}>-</button>
      <button onClick={increaseCount}>+</button>
    </>
  )
}

export default Counter