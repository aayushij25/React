import { useEffect, useState } from "react";

function Section() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("Section has re-rendered");
  });
  
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h2>Timer on page: {time} second(s)</h2>
    </>
  )
}

export default Section;