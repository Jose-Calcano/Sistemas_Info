import React from 'react'
import { Link } from 'react-router-dom'
import "./DoctorCard.module.css"

export default function DoctorCard(data) {

    const { name, email, age, id} = data.Data

    return (
        <div className='card'>
            <div className='imagen'>
                <Link to={`/doctor/${id}}`}><img src="/public/default.png" alt="Foto de Perfil" /></Link>
            </div>
            <div className='info'>
                <Link to={`/doctor/${id}}`}><h1>Nombre: {name}</h1></Link>
                <h3>Edad: {age}</h3>
                <h3>Email: {email}</h3>
            </div>
        </div>
    )
}
