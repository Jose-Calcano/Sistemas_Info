import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAdditionalUserInfo } from "firebase/auth"
import { auth, GoogleProvider } from "./config"
import { createDoctorProfile } from "./doctor-service"
import { createPatientProfile } from "./patient-service"

export const signinWithGoogle = async (doc) => {
    try {
        const result = await signInWithPopup(auth, GoogleProvider)

        const {isNewUser} = getAdditionalUserInfo(result)


        if (isNewUser) {
            if (doc) {
                await createDoctorProfile(result.user.uid, {
                    email: result.user.email,
                    name: result.user.displayName,
                    age: 0,
                })
            } else {
                await createPatientProfile(result.user.uid, {
                    email: result.user.email,
                    name: result.user.displayName,
                    age: 0,
                })
            }
        }

    } catch (error) {
        console.log(error)
    }
}

export const registerWithEmailAndPassword = async (email, password, extraData, doc) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password)
        const id = result.user.uid
        console.log(result)
        if (doc) {
            await createDoctorProfile(id, {
                id,
                email,
                ...extraData
            })
        } else {
            await createPatientProfile(id, {
                id,
                email,
                ...extraData
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const loginWithEmailAndPassword = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error)
    }
}