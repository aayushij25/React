import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import Button from './Button'
// import Input from './Input'
// import Grades from './Grades'
import ContactForm from './ContactForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  {/* <Button /> */}
  {/* <Input /> */}
  {/* <Grades /> */}
  <ContactForm />
  </StrictMode>,
)
