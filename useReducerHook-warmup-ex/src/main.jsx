import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Counter from './ex2/Counter.jsx'
import ControlledForm from './ex3/ControlledForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ControlledForm />
  </StrictMode>,
)
