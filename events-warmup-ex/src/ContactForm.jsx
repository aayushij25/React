function ContactForm() {
  function getFormData(e) {
    e.preventDefault();
    const fd = new FormData(e.target);

    // for(const entry of fd.entries()) {
    //   console.log(entry);
    // }

    // console.log([...fd.entries()]);

    console.table(Object.fromEntries(fd));
  }
  return (
    <form onSubmit={getFormData}>
      <input type="text" name="firstName" placeholder="first name" />
      <input type="text" name="lastName" placeholder="last name" />
      <input type="number" name="age" placeholder="age" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm