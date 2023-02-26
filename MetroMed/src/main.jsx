import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from '/src/Pages/HomePage/HomePage.jsx'
import LoginPage from '/src/Pages/LoginPage/LoginPage.jsx'
import RegisterPage from '/src/Pages/RegisterPage/RegisterPage.jsx'
import Plantilla from './Components/Plantilla/Plantilla'
import CatalogoPage from '/src/Pages/RegisterPage/CatalogoPage.jsx'
import { HOME_URL, LOGIN_URL, SIGNIN_URL, CATALOGO_URL } from './constants/urls'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<HomePage />} />
        <Route path={CATALOGO_URL} element={<CatalogoPage/>}/>
        <Route path={SIGNIN_URL} element={<LoginPage/>}/>
        <Route path={LOGIN_URL} element={<RegisterPage />} />
        <Route path="*" element={<h1>ERROR 404!!!!!</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
