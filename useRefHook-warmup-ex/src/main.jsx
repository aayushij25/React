import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Input from './warmup/Input.jsx'
// import Video from './ex1/Video.jsx'
// import GuessNumber from './ex2/GuessNumber.jsx'
import Form from './ex3/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)
