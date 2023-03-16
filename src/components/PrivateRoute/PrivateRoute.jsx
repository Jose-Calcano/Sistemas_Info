import React from 'react'
import { Navigate } from 'react-router-dom'
import { LOGIN_URL } from '../../constants/urls'
import { useUser } from '../../contexts/UserContext'

export default function PrivateRoute({ children }) {
    const { user, loading } = useUser()
    
    // if (loading) {
    //     return <h1>Loading...</h1>
    // }
    // if (!loading && user === null) {
    //     return <Navigate to={LOGIN_URL}></Navigate>
    // }

    return children
    
    
}
