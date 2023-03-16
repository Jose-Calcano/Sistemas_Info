import React from 'react'
import { useParams } from 'react-router-dom'
import { getPatientProfile } from '../../firebase/patient-service'
import "./PacientePage.css"

function PacientePage() {

    // const paciente_id = useParams().id_paciente
    // console.log(paciente_id)
    // const paciente = getPatientProfile(paciente_id)
    // console.log(paciente)

    const result = {
    id: "9Pna9dr2aPc3YLPMqW9o61kNWEQ2",
    email: "leon.serpa@correo.unimet.edu.ve",
    age: 0,
    name: "León Serpa"
    }

    const {email, age, name} = result

    return (
        <div className="body">
            <div className='caja'>
                <div className="imagen">
                    <img src="/public/default.png" alt="Foto de perfil" />
                </div>
                <div className='info'>
                    <h1>{name}</h1>
                    <h2>Edad: {age}</h2>
                    <h2>Correo: {email}</h2>
                    <h3>Doctores actuales: </h3>
                    </div>
            </div>
        </div>
    )
}

export default PacientePage