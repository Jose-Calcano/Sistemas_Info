import React from 'react'
import { CHAT_URL, HOME_URL, LOGIN_URL, SIGNIN_URL, CATALOGO_URL, PACIENTE_URL } from '../../constants/urls';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { logout } from '../../firebase/auth-service';
import "./Navbar.module.css"

export default function Navbar() {

    const { user, loading, doc } = useUser()
    const navigate = useNavigate()
    const handleLogout = async () => {
        await logout()
        navigate(HOME_URL)
    }
    console.log(user)
    return (
            <div className="nav">
            {loading && <h1>Loading...</h1>}
            {!loading && !user &&
                <>
                    <Link to={SIGNIN_URL}><h3>Registrarse</h3></Link>
                    <Link to={LOGIN_URL}><h3>Iniciar Sesión</h3></Link>

                </>}
                    
            {!loading && user &&
                <>
                <Link to={doc ? `/doctor/${user.id}` : `/paciente/${user.id}`}>
                    <h1>Perfil, {user.name}</h1>
                </Link>
                    {/* <Link to={CHAT_URL}><h3>Chat</h3></Link> */}
                    <button type="button" onClick={handleLogout}>Salir</button>
                </>}
                    

                <Link to={CATALOGO_URL}><h3>Ver Catálogo</h3></Link>

                <a href="#">Plan Mensual</a>
                <a href="#contact">Contacto</a>
                <Link to={HOME_URL}>Inicio</Link>
                
            </div>
    )
}
