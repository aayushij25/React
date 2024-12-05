// eslint-disable-next-line react/prop-types
function Paragraph({monkey, hello}) {
  // console.log(props);
  // console.log(props.monkey);
  console.log('hello:', hello)
  return <p>Hello {monkey}!</p>
}

export default Paragraph