import React from 'react'
import './RegisterPage.css'
import { HOME_URL } from '../../constants/urls';

export default function RegisterPage() {
    //const [formData] = State({});
    //const navigate = Navigate();
    //const Success = () => {
    //    navigate(HOME_URL);
    //};
    //const Fail = (_error) => {
    //    console.log("Registro fallido");
    //};
    //const Submit = async (event) => {
    //    event.preventDefault();
    //    await registerEmailPassword({
    //        userData: formData, Success, Fail,
    //    });
    //};
    return (
        <>
        <div>RegisterPage</div>
        <section class="cuadros-ReIS">
                <h1>Registrarse</h1>
                <div class="cuadro-doc">
                    <h4 class="ReIS-doc">Doctor</h4>
                    <p class="texto-doc" id="registro-doc">Si eres un doctor que está interesado en unirte a MetroMED registrate aquí.</p>

                    <div class="cajas">
                        <input type="text" placeholder="Correo" class="caja11" id="correo-d" />
                        <input type="text" placeholder="Nombre de usuario" class="caja21" id="usuario-d" />
                        <input type="text" placeholder="Contraseña" class="caja31" id="password-d" />
                        <input type="text" placeholder="Repite contraseña" class="caja41" id="password2-d" />
                    </div>

                    <div class="boton">
                        <button id="registrarse1" type="button">Registrarse</button>
                    </div>
                </div>

                <div class="cuadro-pac">
                    <h4 class="ReIS-pac">Paciente</h4>
                    <p class="texto-pac">Si quieres un psicólogo y estás interesado en unirte a MetroMED registrate aquí.</p>

                    <div class="cajas">
                        <input type="text" placeholder="Correo" class="caja12" id="correo-p" />
                        <input type="text" placeholder="Nombre de usuario" class="caja22" id="usuario-p" />
                        <input type="text" placeholder="Contraseña" class="caja32" id="password-p" />
                        <input type="text" placeholder="Repite contraseña" class="caja42" id="password2-p" />
                    </div>

                    <div class="boton">
                        <button id="registrarse2" type="button">Registrarse</button>
                    </div>
                </div>

            </section>
        
        </>
    )
}
