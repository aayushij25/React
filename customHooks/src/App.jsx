import useLogOnMount from "./useLogOnMount.jsx"
import useTimer from "./useTimer.jsx";
import MyTimer from "./MyTimer.jsx";

function App() {
  useLogOnMount("App");
  useLogOnMount();

  const timer = useTimer();

  return (
    <>
      <h1>App</h1>
      <p>Seconds elapsed: {timer}</p>
      <MyTimer />
    </>
  )
}

export default App
