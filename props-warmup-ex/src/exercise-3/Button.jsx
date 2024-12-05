/* eslint-disable react/prop-types */
function Button({text, handleClick}) {
  return <button onClick={handleClick}>{text}</button>
 }
 
 export default Button