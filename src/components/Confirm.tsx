import { ChangeEvent, FormEvent, useState } from "react"
import { setNewConfirmation } from "../services/setNewConfirmation"
export default function Confirm(){

    const[input, setInput]= useState("")

    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        try {
            setNewConfirmation(input)
        } catch (error) {
            console.log(error);
        }
    }




    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setInput(e.target.value); 
    }

    return(
        <div className="box-confirm">
            <h2>Hagamos juntos una fiesta épica.</h2>
            <form onSubmit={handleSubmit} className="form">
                <input onChange={handleChange} className="form-control" type="text" placeholder="Nombre completo" />
                <button type="submit" className="btn">Confirmar asistencia</button>
            </form>
        </div>
    )
}