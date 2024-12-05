function Cars() {
  // Exercise 3
  const arr = ["Honda", "BMW", "Audi", "G-wagon", "Thar"]
  // eslint-disable-next-line react/jsx-key
  const carPTags = arr.map((item) => <p>{item}</p>);
  return <>{carPTags}</>;
}

export default Cars