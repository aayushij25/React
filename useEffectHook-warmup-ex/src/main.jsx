import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Counter from './warmup/Counter.jsx'
// import Interval from './ex-1/Interval,jsx'
// import Home from './ex-2/Home.jsx'
import Pokemon from './ex-3/Pokemon.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pokemon />
  </StrictMode>,
)
