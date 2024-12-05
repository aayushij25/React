import { useEffect, useState } from "react";

function useAuth() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setLoggedIn((prev) => !prev); 
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return loggedIn;
}

export default useAuth;