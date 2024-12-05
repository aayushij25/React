import { useReducer } from "react";

function formReducer(prevState, action) {
  switch(action.type) {
    default:
      throw new Error("Invalid Action Type");
    case 'CHANGE':
      return {
        ...prevState,
        [action.value.name]: [action.value.value],
      };
  }
}

const initialState = {name: '', email: '', age: ''};

function ControlledForm() {
  const [formState, dispatchForm] = useReducer(formReducer, initialState);
  
  function submitForm(e) {
    e.preventDefault();
    console.log(formState);
  }
  
  function formChange(e) {
    // console.log(e.target.name, e.target.value);
    dispatchForm({
      type: 'CHANGE', 
      value: {
        name: e.target.name, 
        value: e.target.value
      }
    });
  }

  return (
    <>
      <form onSubmit={submitForm} onChange={formChange}>
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="abc@123.com" />
        <input type="number" name="age" placeholder="18" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ControlledForm;