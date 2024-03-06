import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './components/Login/LogIn'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/react.svg'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
)
