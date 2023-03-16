import React from 'react'
import { Link } from 'react-router-dom'
import { getDoctorProfile, getDoctors } from '../../firebase/doctor-service'
import "./CatalogoPage.css"
import DoctorCard from '../../components/DoctorCard/DoctorCard'

export default function CatalogoPage() {

    const results = getDoctors()

    const resultss = [{
        name: "León",
        email: "correo@correo.com",
        age: 0,
        id: "jXxVeTjsS4ZhH6JYHjx0X9Z45Q32"
    },{
        name: "Pablo",
        email: "corre2o@correo.com",
        age: 1,
        id: "aaaaaa"
    }]

    return (
        <>
            <div className="busquedas">
                <input type="text" placeholder='Busqueda por nombre' className="busqueda"/>
                <input type="text" placeholder='Busqueda por prioridad' className="busqueda"/>
            </div>
            <div className="doctores">
                <h1>Doctores</h1>
                <div className="listado">
                    {results.size == 0 ?
                        <h1>No se encontró ningún doctor</h1>
                        :
                        <>
                            {resultss.map((doctor) => (
                                <DoctorCard Data={doctor}></DoctorCard>
                            ))
                            }
                        </>
                    }
                </div>
            </div>
        </>
        
    )
}
