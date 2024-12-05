import { useEffect, useRef, useState } from "react";

function useStateWithLogger(initialState) {
  const [state, setState] = useState(initialState);
  const previousState = useRef(initialState);

  useEffect(() => {
    console.log(`State changed to: ${state}, from: ${previousState.current}`);
    previousState.current = state;
  }, [state]);

  // function loggedSetState(value) {
  //   console.log(value);
  //   setState(value);
  //   console.log(value);
  // }

  return [state, setState];
}

export default useStateWithLogger;