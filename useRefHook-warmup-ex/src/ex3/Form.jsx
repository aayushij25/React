import { useRef, useState } from "react";

function Form() {
  const formRef = useRef(null);
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    let paraText = '';
    for(const [k,v] of formData) {
      paraText += `${k}: ${v} \xa0\xa0\xa0`;
    }
    console.log(paraText);
    setText(paraText);
    setName("");
    setEmail("");
    setAge("");
  }

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" onInput={handleName} value={name} />
        <input type="email" name="email" placeholder="abc@123.com" onInput={handleEmail} value={email} />
        <input type="number" name="age" placeholder="18" onInput={handleAge} value={age} />
        <button type="submit">Submit</button>
        <p>{text}</p>
      </form>
    </>
  )
}

export default Form;