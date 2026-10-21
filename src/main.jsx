// StrictMode ayuda a detectar prácticas problemáticas durante el desarrollo.
import { StrictMode } from 'react'
// createRoot crea el punto de entrada de React dentro del elemento HTML #root.
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Renderiza la aplicación principal dentro del contenedor definido en index.html.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
