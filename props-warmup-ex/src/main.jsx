import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import Section from './exercise-2/Section.jsx'
// import Profile from './exercise-3/Profile'
import Paragraph from './bonus/Paragraph';

// function sayBoo() {
//   console.log("Boo from main.jsx!");
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    {/* <Section /> */}

    {/* <Profile 
      pText={"This is the profile text"}
      cText={"This is the card text"}
      bText={"Click Me"}
      handleClick={sayBoo} 
    /> */}

    <Paragraph text={"paragraph"}>
      <h1>BONUS</h1>
      <input type="text" placeholder='name' />
    </Paragraph>
  </StrictMode>,
)
