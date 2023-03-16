import React, { useState } from 'react'
import "./RegisterPage.css"
import {  DOCTOR_URL, PACIENTE_URL, CHAT_URL, HOME_URL, LOGIN_URL, SIGNIN_URL, CATALOGO_URL  } from '../../constants/urls';
import { logout, registerWithEmailAndPassword, signinWithGoogle } from '../../firebase/auth-service';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

export default function RegisterPage() {

    const user = useUser()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        age: 0,
    })
    const [doc, setDoc] = useState(false)

    const handleOnChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    const handleSignInWithGoogle = async (doc) => {
        await signinWithGoogle(doc)
        navigate(HOME_URL)
    }

    const onSubmit = async (event) => {
        event.preventDefault()

        const { email, password, ...extraData } = formData

        await registerWithEmailAndPassword(email, password, extraData, doc)
        navigate(HOME_URL)
    }



    const handleLogout = async () => {
        await logout()
    }

    return (
        <>
            
            <div className="buttons">      
                <div className="button" onClick={() => { setDoc(false)}}>Soy un paciente</div>
                <div className="button" onClick={() => { setDoc(true)}}>Soy un doctor</div>      
            </div>
            <div className="formulario">

                <h1>Cree su cuenta</h1>
                {!doc ? <>
                    <form className="form" onSubmit={onSubmit}>
                        <h1>Paciente</h1>

                        <div className="Container">
                            <label htmlFor="name">
                                <span>Ingresa tu nombre</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Eg. León Serpa"
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className="Container">
                            <label htmlFor="email">
                                <span>Ingresa tu correo electrónico</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Eg. ejemplo@correo.com"
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className="Container">
                            <label htmlFor="contraseña">
                                <span>Ingresa tu contraseña</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Eg. 12345"
                                onChange={handleOnChange}
                            />
                        </div>

                        <input type="submit" value="Registrar" className="registro"/>

                        <button className="button" onClick={() => handleSignInWithGoogle(doc)}>Registrarse con Google</button> 
                        
                    </form>
                    
                </>
                    :
                <>
                    <form className="form" onSubmit={onSubmit}>
                            <h1>Doctor</h1>
                            
                            <div className="Container">
                            <label htmlFor="name">
                                <span>Ingresa tu nombre</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Eg. León Serpa"
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className="Container">
                            <label htmlFor="email">
                                <span>Ingresa tu correo electrónico</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Eg. ejemplo@correo.com"
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className="Container">
                            <label htmlFor="contraseña">
                                <span>Ingresa tu contraseña</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Eg. 12345"
                                onChange={handleOnChange}    
                            />
                        </div>
                            
                            <input type="submit" value="Registrar" className='registro'/>
                        
                        <button className="button" onClick={() => handleSignInWithGoogle(doc)}>Registrarse con Google</button>
                        
                    </form>
                        
                        </>}
                </div>

        </>
    )
}
