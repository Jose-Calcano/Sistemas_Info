import { onAuthStateChanged } from "firebase/auth"
import React, { useContext, createContext, useEffect, useState } from "react"
import {auth} from "../firebase/config"
import { getDoctorProfile } from "../firebase/doctor-service"
import { getPatientProfile } from "../firebase/patient-service"

export const UserContext = createContext(null)

export function UserContextProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [doc, setDoc] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, async (firebaseUser) => {
            setLoading(true)
            if (firebaseUser) {
                const profile = await getPatientProfile(firebaseUser.uid)

                setUser(profile)
                setDoc(false)

                if (user === null && profile === null) {
                    const profile = await getDoctorProfile(firebaseUser.uid)
                    setUser(profile)
                    setDoc(true)
                    console.log(user)
                }
            } else {
                setUser(null)
            }
            setLoading(false)
        })
    }, [])

    return <UserContext.Provider
        value={{
            user,
            loading,
            doc
        }}
    >
        {children}
    </UserContext.Provider>
}

export function useUser() {
    return useContext(UserContext)
}