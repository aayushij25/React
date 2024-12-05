import { useEffect, useRef } from 'react'

function App() {
  const reference = useRef(0);
  const domRef = useRef(null);
  console.log(reference, domRef);
  reference.hello = "hello";
  reference.animal = 'deer';

  function handleClick() {
    reference.current++;
    console.log(reference);
  }

  useEffect(() => {
    console.log('ref changed!', reference);
    console.log('dom ref changed!', domRef);
  });

  // useEffect(() => {
  //   domRef.current.textContent = "Boooo!"
  // }, []);

  return (
    <>
      <h1 ref={domRef}>App</h1>
      <p>{reference.current}</p>
      <button onClick={handleClick}>Click me!</button>
    </>
  )
}

export default App;
