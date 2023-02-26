import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
    
export default function Plantilla() {
    return (
        <main>
            <Navbar />
            
            <section className='Body'>
                <Outlet/>
            </section>

            <Footer/>
        </main>
    )
}
