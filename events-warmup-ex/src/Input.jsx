function Input() {
  function inputVal(e) {
    const tagName = e.target.tagName;
    const id = e.target.getAttribute('id');
    console.log(`[${tagName} id=${id}]: ${e.target.value}`);
  }
  
  return <input onInput={inputVal} type="text" id="username" />
}

export default Input