import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Level3 from './Level3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Level3 />
  </StrictMode>,
)
