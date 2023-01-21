import { useState,useEffect } from "react"


export default function Counter() {
    const birthDayDate= new Date("April 08 2023")

    const [counter, setCounter] = useState({
        days:"",
        hours:"",
        minutes:"",
        seconds:""
    })

    useEffect(()=>{
        setInterval(()=>{
            let milliseconds =(birthDayDate.valueOf() - Date.now())

            let days= (Math.trunc(milliseconds/(1000*60*60*24))).toString()
            let daysDifference = milliseconds%(1000*60*60*24)

            let hours = Math.trunc(daysDifference/(1000*60*60)).toString()
            let hoursDifference = daysDifference%(1000*60*60)

            let minutes = Math.trunc(hoursDifference/(1000*60)).toString()
            let minutesDifference = hoursDifference %(1000*60)

            let seconds = Math.trunc(minutesDifference/1000).toString()

            setCounter({
                days:days,
                hours:hours,
                minutes:minutes,
                seconds:seconds
            })
        },1000)
        
    })

    

    return(
        <div className="box-counter">

            <div className="container text-center w-75">
                <h3 className="mb-2">Faltan</h3>
                <div className="row">
                    <div className="col-3">{counter.days}</div>
                    <div className="col-3">{counter.hours}</div>
                    <div className="col-3">{counter.minutes}</div>
                    <div className="col-3">{counter.seconds}</div>
                </div>
                <div className="row">
                    <div className="col-3">Dias</div>
                    <div className="col-3">Horas</div>
                    <div className="col-3">Minutos</div>
                    <div className="col-3">Segundos</div>
                </div>
            </div>
        </div>
    )
}