import { ChangeEvent, FormEvent, useState } from "react"
import { setNewConfirmation } from "../services/setNewConfirmation"
export default function Confirm(){

    const[input, setInput]= useState("")
    const[alertHide, setAlertHide] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        try {
            await setNewConfirmation(input)
            setAlertHide(true)
            setInput("")
        } catch (error) {
            if (error instanceof Error){
                console.log(error.message);
                setError(error.message);
                setAlertHide(false)
            }
        }
    }




    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setInput(e.target.value); 
    }

    return(
        <>    
            <div className="box-confirm">
                <h2>Hagamos juntos una fiesta épica.</h2>
                <form onSubmit={handleSubmit} className="form" id="form-confirm">
                    <input value={input} onChange={handleChange} className="form-control" type="text" placeholder="Nombre completo" />
                    <button type="submit" className="btn">Confirmar asistencia</button>
                </form>
            </div>
            <div className="box-alert text-center ">
                {alertHide ? <h4 className="fs-6">Gracias por confirmar 🖤</h4> : <h4 className="fs-6">{error}</h4>}
            </div>
        </>
    )
}