import { doc, setDoc, collection, query, where, getDocs} from "firebase/firestore";
import { db } from "./config";


export async function createPatientProfile(userId, data) {
    return setDoc(doc(db, "paciente", userId), data)
}

export async function getPatientProfile(id) {
    const userQuery = query(collection(db, "paciente"),where("id", "==", id))
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