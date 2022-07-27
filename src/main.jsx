//estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

//libreria
import React from 'react'
import ReactDOM from 'react-dom/client'
//componentes
import App from './componentes/App'

// borrar el strictMode antes de desplegar
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
