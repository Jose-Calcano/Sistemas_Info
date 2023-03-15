import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from '/src/pages/HomePage/HomePage.jsx'
import LoginPage from '/src/pages/LoginPage/LoginPage.jsx'
import RegisterPage from '/src/pages/RegisterPage/RegisterPage.jsx'
import CatalogoPage from '/src/pages/CatalogoPage/CatalogoPage.jsx'
import ChatPage from '/src/pages/ChatPage/ChatPage.jsx'
import { CHAT_URL, HOME_URL, LOGIN_URL, SIGNIN_URL, CATALOGO_URL } from './constants/urls'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<HomePage />} />
        <Route path={CATALOGO_URL} element={<CatalogoPage/>}/>
        <Route path={SIGNIN_URL} element={<RegisterPage/>}/>
        <Route path={LOGIN_URL} element={<LoginPage />} />
        <Route path={CHAT_URL} element={<ChatPage/>} />
        <Route path="*" element={<h1>ERROR 404!!!!!</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
