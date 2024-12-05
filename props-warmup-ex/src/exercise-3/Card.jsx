import Button from "./Button.jsx"

/* eslint-disable react/prop-types */
function Card({cText, bText, handleClick}) {
  return (
    <>
      <h2>{cText}</h2>
      <Button 
        text={bText} 
        handleClick={handleClick} 
      />
    </>
  )
}

export default Card