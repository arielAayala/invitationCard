import { useEffect, useState } from "react"
import { getConfirmation } from "../services/Confirmation"

export default  function Confirmados(){

    const [confirmados, setConfirmados] = useState<any[]>([])

    const useConfirmation = async () =>{
        setConfirmados(await getConfirmation())
    }

    useConfirmation()


    return (
        <div className="box-guess">
            <div className="container-guess">
                <h1>Confirmados</h1>
                {
                    confirmados? 
                    confirmados.map((i)=>{
                        return(
                            <h3 key={i.nombre} >{i.nombre}</h3>
                        )
                    }):
                    <h3>no hay invitados</h3>
                }
            </div>
        </div>
    )
}