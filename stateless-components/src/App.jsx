/* eslint-disable no-unused-vars */
import React from 'react'
function App() {
  // return (
  // <>
  // {/* This is a comment */}
  //   <h1>Hello! 🚀</h1>
  //   <p>Hello there!</p>
  // </>
  // );
  
  // return "hi";

  // return 1000.01;

  // return true;

  const str = "monkey";
  const num = 1337;
  const p = <p>This is awesome! 🔥</p>
  const arr = ["one", "two", "three"]
  // return [str, num, p, arr];
  // return arr.map((item) => <h1>{item}</h1>);
  // return React.createElement("p");
  const random = Math.random();
  if(random < 0.5) return <p>Boo!</p>
  return <span>You lose!</span>;
}

export default App
