import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPatientProfile } from '../../firebase/patient-service'
import "./PacientePage.css"

function PacientePage() {

    const patient_id = useParams().id_paciente


    const [patient, setPatient] = useState(null)

    const fetchPatient = async () => {
        const paciente = await getDoctorProfile(patient_id)
        setPatient(paciente)
    }

    useEffect(() => {
        fetchPatient()
    },[])

    const [name, age, email] = patient
    

    const result = {
    id: "9Pna9dr2aPc3YLPMqW9o61kNWEQ2",
    email: "leon.serpa@correo.unimet.edu.ve",
    age: 0,
    name: "León Serpa"
    }
    
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