import { useState, useEffect } from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(10);

  useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    const id = setInterval(() => {
      console.log(`[${random}] - Re-rendered`);
    }, 1000);
    return () => clearInterval(id); //Cleanup
  });

  // useEffect(() => {
  //   console.log("Hi there - Counter1!");
  //   return () => console.log("Cleanup - Counter1");
  // }, [counter]);

  // useEffect(() => {
  //   console.log("Hi there - Counter2!");
  //   return () => console.log("Cleanup - Counter2");
  // }, [counter2]);

  // useEffect(() => {
  //   console.log("Re-rendered!");
  //   return () => console.log("Re-rendered Cleanup!");
  // }); // On every re-render

  // useEffect(() => {
  //   console.log("Mounted");
  //   return () => console.log("Un-Mounted!");
  // }, []); // Only on mount

  // console.log("Hi there from outside!");
  return (
    <>
      <h1>App</h1>
      <p>Counter: {counter}</p>
      <p>Counter2: {counter2}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Go up C1!
      </button>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Go up C2!
      </button>
    </>
  )
}

export default App
