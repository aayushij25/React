import { useEffect, useState } from "react"

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon/mootin";
    fetch(URL)
      .then((res) => {
        if(!res.ok) {
          setError(true);
          return;
        }
        return res.json();
      })
      .then((json) => setPokemon(json))
  }, []);

  if(error) {
    return <p>Sorry, pokemon not found!</p>;
  } // guard

  return (
    <>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
      <p>Weight: {pokemon?.weight}</p>
    </>
  )
}

export default Pokemon