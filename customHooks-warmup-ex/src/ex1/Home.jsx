import useAuth from "./useAuth.jsx";

function Home() {
  let logger = useAuth() ? "Your Profile" : "Not authenticated";

  return (
    <>
      <h1>{logger}</h1>
    </>
  )
}

export default Home;