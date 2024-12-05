function People() {
  const people = [
    {name: "Aayushi", age: 24},
    {name: "Aayush", age: 32},
    {name: "Aarya", age: 19},
    {name: "Yoda", age: 9000}
  ];

  return (
    people.map((item) => 
    <>
    <h1>{item.name}</h1>
    <p>{item.age}</p>
    </>)
  );
}

export default People