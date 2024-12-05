import { useState } from "react";

function Names() {
  const [state, setState] = useState([]);
  const [name, setName] = useState('');

  console.log(state);

  function enterNameInArr() {
    setState((prevArr) => [...prevArr, name]);
    setName('');
  }

  function getName(e) {
    setName(e.target.value);
  }

  const returnPTags = state
    .filter((name) => name.startsWith('A'))
    .map((name) => <p key={name}>{name}</p>);

  function printAInPTag() {
    return state
    .filter((name) => name.startsWith('A'))
    .map((name) => <p key={name}>{name}</p>);
  }

  return (
    <>
      <input type="text" name="name" value={name} onChange={getName} />
      <button onClick={enterNameInArr}>Submit</button>
      {returnPTags}
      {printAInPTag()}
    </>
  )

}

export default Names;