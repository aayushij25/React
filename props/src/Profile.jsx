// eslint-disable-next-line react/prop-types
function Profile({first, last}) {
  console.log("PROFILE: ", first, last);
  return <div>
    <img src="" alt="" />
    <h3>Name: {first} {last}</h3>
    <button>Say hello!</button>
  </div>
}

export default Profile