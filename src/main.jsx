import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TestBlock from './weatherApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestBlock/>
  </StrictMode>,
)
