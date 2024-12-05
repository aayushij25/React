import { useEffect, useState } from "react";

function Pokemon() {
  const [pokemonPage, setPokemonPage] = useState(null);
  const [error, setError] = useState(null);

  function reRenderUrl(url) {
    return fetch(url)
              .then((res) => {
                if(!res.ok) {
                  setError(true);
                  return;
                }
                return res.json();
              })
              .then((json) => {
                console.log(json);
                return setPokemonPage(json);
              })
  }

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/ability/?limit=20&offset=0";
    reRenderUrl(url);
  }, []);


  if(error) {
    return <p>Something went wrong!</p>
  }

  const getPoke = pokemonPage?.results.map((pokemon) => {
    return <p key={pokemon?.name}>{pokemon?.name}</p>
  })

  const showPrevious = pokemonPage?.previous && <button onClick={clickedPrevious}>Previous</button>;

  const showNext = pokemonPage?.next && <button onClick={clickedNext}>Next</button>;

  function clickedNext() {
    reRenderUrl(pokemonPage?.next);
  }

  function clickedPrevious() {
    reRenderUrl(pokemonPage?.previous);
  }

  return (
    <>
      <h1>Pokemon List</h1>
      {getPoke}
      {showPrevious}
      {showNext}
    </>
  )

}

export default Pokemon;