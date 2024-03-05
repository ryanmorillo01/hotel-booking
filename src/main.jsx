import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginAuthComponent from './component/auth/LoginAuthComponent.jsx'
import CreateAuthComponent from './component/auth/CreateAuthComponent.jsx'
import Crud from './component/Crud1/Crud.jsx'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <React.StrictMode>
  <Crud />
</React.StrictMode>,
)
