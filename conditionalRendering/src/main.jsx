import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import If from './If.jsx'
// import './index.css'
// import App from './App.jsx'
// import Switch from './Switch.jsx'
// import Ternary from './Ternary.jsx'
// import LogicalAND from './LogicalAND.jsx'
// import LogicalOR from './LogicalOR.jsx'
// import LogicalNullish from './LogicalNullish.jsx'
import Inputs from './Inputs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inputs />
  </StrictMode>,
)
