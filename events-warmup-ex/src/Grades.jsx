function Grades() {
  function handleClick(e) {
    // console.log(e.target.innerText);
    console.log(e.target.textContent);
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Mark</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody onClick={handleClick}>
        <tr>
          <td>English</td>
          <td>96</td>
          <td>A+</td>
        </tr>
        <tr>
          <td>Math</td>
          <td>99</td>
          <td>A+</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>83</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Music</td>
          <td>91</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Coding</td>
          <td>78</td>
          <td>B</td>
        </tr>
      </tbody>
    </table> 
  ) 

}

export default Grades