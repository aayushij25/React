import kittenImg from './assets/kitten.jpg'
function Card() {
  // Exercise 2
  return (
    <>
      <img src={kittenImg} alt="kitten" />
      <h2>Aayushi Jaiswal</h2>
      <p>I am a software developer working in Jio and learning React.</p>
    </>
  );
}

export default Card