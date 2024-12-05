function Button() {
  function handleBtnClick() {
    console.log("Hello there!");
  }
  return <button onClick={handleBtnClick}>Click Me!</button>
}

export default Button