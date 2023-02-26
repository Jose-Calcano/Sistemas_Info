import React from 'react'
import './HomePage.module.css'
import { HOME_URL, LOGIN_URL, SIGNIN_URL, CATALOGO_URL } from '../../constants/urls'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <nav id="inicio">
            <div className="logo">
                <img href="../../../../public/Icono.png" alt='logo'/> 
            </div>
            <ul className="nav-links">
                <li>    
                    <Link to={CATALOGO_URL}><h3>Ver Catálogo</h3></Link> 
                </li>
                <li>
                    <Link to={SIGNIN_URL}><h3>Registrarse</h3></Link> 
                </li>
                <li>
                    <Link to={LOGIN_URL}><h3>Iniciar Sesión</h3></Link> 
                </li>
            </ul>
            <div className="atributo">
                <div className="linea-1"></div>
                <div className="linea-2"></div>
                <div className="linea-3"></div>
            </div>
        </nav>
    )
}
