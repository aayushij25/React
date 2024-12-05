import useTimer from "./useTimer.jsx";

function MyTimer() {
  const seconds = useTimer(100);
  return (
    <>
      <h2>My Timer: {seconds}</h2>
    </>
  )
}

export default MyTimer;