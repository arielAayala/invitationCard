

export default function Contador() {
    const fechaCumpleaños = new Date("January 20 2023")

    let tiempoFaltante =new Date (fechaCumpleaños.valueOf() - Date.now())

    return(
        <>
            <h3>fecha Cumpleaños: {fechaCumpleaños.toDateString()}</h3>
            <h3>tiempo Faltante: {tiempoFaltante.toLocaleString('sv')} </h3>    
        </>
    )
}