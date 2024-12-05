/* eslint-disable-next-line react/prop-types */
function Button({text, dispatch, action}) {
  function handleClick() {
    dispatch(action);
  }
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

export default Button;