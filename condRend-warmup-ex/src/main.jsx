import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Button from './warmup/Button.jsx'
// import Button from './ex1/Button.jsx'
// import Auth from './ex2/Auth.jsx'
import Names from './ex3/Names.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Button loading={true}/> */}
    <Names />
  </StrictMode>,
)
