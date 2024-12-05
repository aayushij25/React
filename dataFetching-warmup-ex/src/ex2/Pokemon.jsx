import { useRef, useState } from "react"

// const cache = new Map();

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const pokemonCache = useRef(new Map());

  function searchPokemon() {
    //if present in cache, 
    const pokemonName = inputRef.current.value;
    if(pokemonCache.current.has(pokemonName)) {
      // return it
      // cache HIT
      setPokemon(pokemonCache.current.get(pokemonName));
      setError(false);
      return;
    }
    //otherwise, fetch it
    // cache MISS
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        if(!res.ok) {
          setError(true);
          return;
        }
        return res.json();
      })
      .then((json) => {
        setPokemon(json);
        //add it to cache
        pokemonCache.current.set(pokemonName, json);
      })
  }

  // if(error) {
  //   return <p>Sorry, pokemon not found!</p>
  // }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={searchPokemon}>Search</button>
      {error && <p>Sorry, pokemon not found!</p>}
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
      <p>{pokemon?.weight}</p>
    </>
  )
}

export default Pokemon;