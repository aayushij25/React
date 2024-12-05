import Profile from "./Profile.jsx"
// eslint-disable-next-line react/prop-types
function Card({fname, lname}) {
  console.log(fname, lname)
  return (
    <>
      <h1>{fname} {lname}</h1>
      <Profile first={fname} last={lname}/>
    </>
  )
}

export default Card