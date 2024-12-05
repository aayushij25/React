import { useEffect } from "react";

function useRerenderLogger(comp) {
  useEffect(() => {
    console.log(`${comp || "Component"}  has mounted!`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(`${comp || "Component"} has re-rendered.`);
  });
}

export default useRerenderLogger;