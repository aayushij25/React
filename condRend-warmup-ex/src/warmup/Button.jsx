// eslint-disable-next-line react/prop-types
function Button({loading}) {
  const btnText = loading ? "Loading..." : "Click me!";
  return(
    <>
      <button>{btnText}</button>
    </>
  )

}

export default Button;