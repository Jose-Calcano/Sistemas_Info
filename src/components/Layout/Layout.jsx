import React from 'react'
import { Outlet } from 'react-router-dom'
import {UserContext, UserContextProvider} from "../../contexts/UserContext"
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
    return (
        <main>
            <UserContextProvider>
                <Navbar/>
                <Outlet />
                <Footer/>
            </UserContextProvider>
        </main>
    )
}
