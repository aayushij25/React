function Switch() {
  const condition = 'hello';

  switch(condition) {
    default:
      return <p>Error!</p>;
    case 'hi':
      return <p>Hi!</p>;
    case 'apple':
      return <p>🍎</p>;
  }
}

export default Switch;