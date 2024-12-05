import Button from "./Button.jsx"
import Header from "./Header.jsx"

function Section() {
  function handleClick() {
    console.log("Boo!");
  }
  return (
    <>
      <Header text={"Exercise 2"} />
      <Button text={"Enter"} handleClick={handleClick} />
    </>
  )
}

export default Section