import React from 'react'
import './LoginPage.module.css'
import { HOME_URL } from "../../constants/urls"

export default function LoginPage() {
    const navigate = Navigate();
    const [formData] = State({
        email: "",
        password:"",
    });
    const Success = () => {
        navigate(HOME_URL);
    };
    const Fail = (_error) => {
        console.log("Error al iniciar sesión");
    };
    const Submit = async (event) => {
        event.preventDefault();
        await loginEmailPassword({userData: formData, Success, Fail});
    };
    return (
        <>
            <div>Iniciar Sesiòn</div>

            <section class="titulo-ReIS">
                <h1>Iniciar sesión</h1>
            </section>

            <section class="cuadros-ReIS">
                <div class="cuadro-doc">
                    <h4 class="ReIS-doc">Doctor</h4>
                    <p class="texto-doc">Si eres un doctor que usa una cuenta de MetroMED inicia sesión aquí.</p>

                    <div class="cajas">
                        <input type="text" placeholder="Correo o usuario" class="caja11" id="correo-d" />
                        <input type="text" placeholder="Contraseña" class="caja21" id="password-d" />
                    </div>

                    <div class="boton">
                        <button id="is1" type="button">Iniciar sesión</button>
                    </div>
                </div>

                <div class="cuadro-pac">
                    <h4 class="ReIS-pac">Paciente</h4>
                    <p class="texto-pac">Si eres un paciente que usa una cuenta de MetroMED inicia sesión aquí.</p>

                    <div class="cajas">
                        <input type="text" placeholder="Correo o usuario" class="caja12" id="correo-p" />
                        <input type="text" placeholder="Contraseña" class="caja22" id="password-p" />
                    </div>

                    <div class="boton">
                        <button id="is2" type="button">Iniciar sesión</button>
                    </div>
                </div>

            </section>
        </>
    )
}
