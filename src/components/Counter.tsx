import { useState,useEffect } from "react"


export default function Counter() {
    const birthDayDate= new Date("April 08 2023")

    const [counter, setCounter] = useState({
        days:"0",
        hours:"0",
        minutes:"0",
        seconds:"0"
    })

    useEffect(()=>{
        /* setInterval(()=>{
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
        },1000)  */
        
    })

    

    return(
        <div className="box-counter">
            <div className="container text-center w-75">
                <div className="counter-container">
                    <div className="row  mb-2">
                        <div className="col-12">
                            <h3 className="">Falta</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center gap-4">
                        <div className="col-2  counter-casilla ">
                            <h5>{counter.days}</h5>
                            <h6>Dias</h6> 
                        </div>
                        <div className="col-2 counter-casilla">
                            <h5>{counter.hours.length === 1? "0"+counter.hours  : counter.hours }</h5>
                            <h6>Horas</h6> 
                        </div>
                        <div className="col-2 counter-casilla">
                            <h5>{counter.minutes.length === 1? "0"+counter.minutes  : counter.minutes }</h5>
                            <h6>Minutos</h6> 
                        </div>
                        <div className="col-2 counter-casilla">
                            <h5>{counter.seconds.length === 1? "0"+counter.seconds  : counter.seconds }</h5>
                            <h6>Segundos</h6> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}