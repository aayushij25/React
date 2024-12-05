import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import Counter from './warmup/Counter.jsx'
// import TextBox from './ex-1/TextBox.jsx'
// import Form from './ex-2/Form.jsx'
// import Profile from './ex-3/Profile.jsx'
import Counter2 from './bonus/Counter2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <TextBox /> */}
    {/* <Form /> */}
    {/* <Profile /> */}
    <Counter2 />
  </StrictMode>,
)
