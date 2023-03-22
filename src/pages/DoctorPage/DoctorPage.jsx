import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoctorProfile } from '../../firebase/doctor-service'
import "./DoctorPage.css"

function DoctorPage() {
    const doctor_id = useParams().id_doctor

    const [doctor, setDoctor] = useState(null)

    const fetchDoctor = async () => {
        const doctor_2 = await getDoctorProfile(doctor_id)
        setDoctor(doctor_2)
    }

    useEffect(() => {
        fetchDoctor()
    },[])

    const result = {
    id: "jXxVeTjsS4ZhH6JYHjx0X9Z45Q32",
    email: "leon.serpa@correo.unimet.edu.ve",
    age: 0,
    name: "León Serpa"
    }

    const [name, age, email] = doctor
    
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
                    <h3>Idiomas: </h3>
                    <h3>Prioridades: </h3>
                    </div>
            </div>
        </div>
    )
}

export default DoctorPage

