import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  const add = () => {
    // count++; // cannot do this
    console.log(count); // 0 
    setCount(count + 1);
    console.log(count); // 0 Async/Callback-based State Updates
  };

  // console.log("rendering app");
  return (
    <>
      <button onClick={add}>
        Click: {count}
      </button>
    </>
  )
}

export default App
