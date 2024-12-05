/* eslint-disable react/prop-types */
function Paragraph({children, text}) {
  return (
    <>
      {children}
      <p>{text}</p>
    </>
  );
}

export default Paragraph