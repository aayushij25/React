import { useState } from "react";

function Form() {
  // My method
  // let [formContent, setFormContent] = useState("");
  // function handleFormSubmit(e) {
  //   e.preventDefault();
  //   const fd = new FormData(e.target);
  //   let objDetails = Object.fromEntries(fd);
  //   setFormContent(JSON.stringify(objDetails));
  // }
  // return (
  //   <>
  //     <form onSubmit={handleFormSubmit}>
  //       <input type="text" name="firstName" placeholder="First Name" />
  //       <input type="text" name="lastName" placeholder="Last Name" />
  //       <input type="email" name="email" placeholder="abc@email.com" />
  //       <button type="submit">Submit</button>
  //     </form>
  //     <h1>{formContent}</h1>
  //   </>
  // )

  // Nader's method
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [h1Text, setH1Text] = useState("");
  function handleFname(e) {
    setFname(e.target.value);
  }
  function handleLname(e) {
    setLname(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setH1Text(`First Name: ${fname} Last Name: ${lname} Email: ${email}`);
    setFname('');
    setLname('');
    setEmail('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fname" onInput={handleFname} value={fname}/>
        <input type="text" name="lname" onInput={handleLname} value={lname}/>
        <input type="email" name="email" onInput={handleEmail} value={email}/>
        <button type="submit">Submit</button>
      </form>
      <h1>{h1Text}</h1>
    </>
  )
}

export default Form