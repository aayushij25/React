import { useEffect, useState, useRef } from "react";

function useQuery(initialURL) {
  const [data, setData] = useState(null);
  const dataCache = useRef(new Map());

  useEffect(() => {
    fetch(initialURL)
    .then((res) => res.json())
    .then ((json) => {
      dataCache.current.set(initialURL, json);
      setData(json);
    });
  }, []);

  function fetcher(urlToFetch) {
    const cache = dataCache.current
    if(cache.has(urlToFetch)) {
      setData(cache.get(urlToFetch)); // CACHE HIT
      return;
    }
    // CACHE MISS
    fetch(urlToFetch).then((res) => res.json())
    .then ((json) => {
      cache.set(urlToFetch, json);
      setData(json);
    });
  }

  return {data, fetcher};

}

export default useQuery;