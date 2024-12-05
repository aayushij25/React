/* eslint-disable react/prop-types */
function Button({setText, text}) {
  function handleClick() {
    if(text === "Logged In") {
      setText("Logged Out");
    } else {
      setText("Logged In");
    }
  }
  return <button onClick={handleClick}>Toggle Login</button>
}

export default Button