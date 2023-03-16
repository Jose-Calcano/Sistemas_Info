import { doc, setDoc, collection, query, getDocs, where} from "firebase/firestore";
import { db } from "./config";


export async function createDoctorProfile(userId, data) {
    return setDoc(doc(db, "doctor", userId), data)
}

export async function getDoctorProfile(id) {
    const userQuery = query(collection(db, "doctor"),where("id", "==", id))
    const results = await getDocs(userQuery)

    if (results.size > 0) {
        const users = results.docs.map((item) => ({
            ...item.data(),
            id: item.id,
        }))

        const [user] = users
        return user
    }
    return null
}

export async function getDoctors() {
    const userQuery = query(collection(db, "doctor"))
    const results = getDocs(userQuery)

    if (results.size > 0) {
        const doctors = results.docs.map((item) => ({
            ...item.data(),
            id: item.id,
        }))
        console.log(doctors)
        return await doctors
    }
    return []
    
}