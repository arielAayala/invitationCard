import { useEffect, useState } from "react"
import { getConfirmation } from "../services/Confirmation"

export default  function Confirmados(){

    const [confirmados, setConfirmados] = useState<any[]>([])

   
    
    useEffect( ()=>{
        const useConfirmation = async()=>{
            setConfirmados(await getConfirmation())
        }
    },[])

    return (
        <div className="text-center">
            <h1>Confirmados</h1>
            {
                confirmados? 
                confirmados.map((i)=>{
                    return(
                        <h3 key={i} >{i}</h3>
                    )
                }):
                <h3>no hay invitados</h3>
            }
        </div>
    )
}