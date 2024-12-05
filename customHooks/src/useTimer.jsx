import { useEffect, useState } from "react";

function useTimer(startTime = 0) {
  const [timer, setTimer] = useState(startTime);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return timer;

}

export default useTimer;