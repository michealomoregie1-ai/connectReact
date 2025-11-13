import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nosa from './Nosa'
import Allusers from './Allusers'
import Login from './Login'
import EditComp from './EditComp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nosa/>
    <Allusers/>
  <Login/>
  <EditComp/>
  </StrictMode>,
)
