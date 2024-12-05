/* eslint-disable react/prop-types */
import Card from "./Card.jsx"

function Profile({pText, cText, bText, handleClick}) {
  return (
    <>
      <h1>{pText}</h1>
      <Card 
        cText={cText} 
        bText={bText} 
        handleClick={handleClick} 
      />
    </>
  )
}

export default Profile