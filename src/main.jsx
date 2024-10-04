import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DataBlock from './weatherApp.jsx'
import TestBlock from './weatherApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestBlock/>
  </StrictMode>,
)
