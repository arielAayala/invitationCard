import db from "./firebase";
import { addDoc,collection, getDocs} from "firebase/firestore"

/**
 * 
 * @param input Data save in firebase
 */
export const setNewConfirmation = async(input:string) =>{
    if (input.length === 0) throw new Error("Ingrese su nombre")
    await addDoc(collection(db,"Confirmados"),{
        nombre:input
    })
}



export const getConfirmation = async()=>{
    const snap = await getDocs(collection(db,"Confirmados"))
    let lstSnap:any = []
    snap.forEach((i)=>{
        lstSnap.push(i.data())
    })
    return lstSnap  
}