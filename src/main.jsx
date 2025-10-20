import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import Parent from './components/Parent.jsx'
import { HashRouter } from 'react-router-dom'
import Parent from './Parent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/Link-Flow'>
          <Parent></Parent>
    </BrowserRouter>

  </StrictMode>

    

)
