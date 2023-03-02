import db from "./firebase";
import {addDoc,collection} from "firebase/firestore"

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