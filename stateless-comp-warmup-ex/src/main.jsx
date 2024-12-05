import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import Card from './Card.jsx'
// import Cars from './Cars.jsx'
import People from './People'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Card /> */}
    {/* <Cars /> */}
    <People />
  </StrictMode>,
)
