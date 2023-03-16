import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginWithEmailAndPassword, signinWithGoogle } from '../../firebase/auth-service'
import { CHAT_URL, HOME_URL, LOGIN_URL, SIGNIN_URL, CATALOGO_URL, PACIENTE_URL } from '../../constants/urls';
import './LoginPage.css'

export default function LoginPage() {
    const [doc, setDoc] = useState(false)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleOnChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    const handleSignInWithGoogle = async () => {
        await signinWithGoogle()
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        const {email, password} = formData
        await loginWithEmailAndPassword(email, password)
        navigate(HOME_URL)
    }

    return (
        <>
            <div className="buttons">      
                <div className="button" onClick={() => { setDoc(false)}}>Soy un paciente</div>
                <div className="button" onClick={() => { setDoc(true)}}>Soy un doctor</div>      
            </div>
            <div className="formulario">
                <h1>Ingrese sus datos</h1>
            {!doc ? <>
                    <form className="form" onSubmit={onSubmit}>
                        <h1>Paciente</h1>

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

                        <input type="submit" value="Iniciar Sesión" className='registro' />
                        
                        <button className="button" onClick={() => handleSignInWithGoogle(doc)}>Registrarse con Google</button> 
                        
                    </form>
                    
                </>
                    :
                <>
                    <form className="form" onSubmit={() => { onSubmit }}>
                            <h1>Doctor</h1>

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
                            
                        <input type="submit" value="Iniciar Sesión" className='registro'/>
                        
                        <button className="button" onClick={() => handleSignInWithGoogle(doc)}>Registrarse con Google</button>
                    </form>
                        </>}
                </div>
        </>
    )
}
