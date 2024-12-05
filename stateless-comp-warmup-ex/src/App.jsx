import kittenImg from './assets/kitten.jpg'
function App() {
  // Warmup exercise
  // const li1 = "listItem1";
  // const li2 = "listItem2";
  // const li3 = "listItem3";
  // return (
  //   <ul>
  //     <li>{li1}</li>
  //     <li>{li2}</li>
  //     <li>{li3}</li>
  //   </ul>
  // );

  // Exercise 1
  return (
    <>
      <h1>Kitten</h1>
      <img src={kittenImg} alt="kitten" />
    </>
  );
}

export default App
