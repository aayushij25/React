import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(
      (res) => {
        console.log(res);
        return res.json();
      }).then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    <>
      {/* <p>{data}</p> */} 
      {/* <p>{data.then((res) =>res)}</p> */}
      {/* <p>{JSON.stringify(data, null, 2)}</p> */}
      {/* <p>{data.name}, {data.weight}</p> * null.name */}
      <p>{data && data.name}, {data && data.height} {data?.name}, {data?.weight}</p>
    </>
  )
}

export default App
