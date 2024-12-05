import { useState, useEffect } from "react";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/squirtle";
    fetch(url).then(
      (res) => {
        return res.json();
      }).then(
      (json) => {
        setPokemon(json);
      })
  }, []);

  return (
    <>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="squirtle" />
      <p>Weight: {pokemon?.weight}</p>
    </>
  )
}

export default Pokemon;