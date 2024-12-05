import { useState, useEffect } from "react";

function Pokemon() {
  const [src, setSrc] = useState("");

  // 1. On mount - go fetch mankey from api
  // 2. get url of img from json response
  // 3. set the 'src' of img to that url
  // 4. re-render our component with the new image

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon/mankey";
    async function getPokemon() {
      const response = await fetch(URL);
      const resJson = await response.json();
      // console.log(resJson);
      const imgURL = resJson.sprites.other['official-artwork'].front_default;
      // console.log(imgURL);
      setSrc(imgURL);
    }
    getPokemon();
  }, []);

  return (
    <>
      <h1>Mankey</h1>
      <img src={src} alt="mankey" />
    </>
  )
}

export default Pokemon;