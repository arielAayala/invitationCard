import ScrollDown from "../assets/static/scrolldown.gif"

export default function Header() {
    return(
        <div className="box-header">
            <div className="text-center ">
                <div className="box-date-name">
                    <span className="fecha">
                        {process.env.REACT_APP_FECHA}
                    </span>
                    <h1>{process.env.REACT_APP_NOMBRE}</h1>
                    <h2>Mis 15 años</h2>
                </div>
                <div className="frase w-100 text-center">
                    <h3 >Te espero para compartir la alegría de esa noche que será para mi mágica, inolvidable y única.</h3>
                </div>
            </div>
            <div className="scrolldown w-100 text-center">
                <button  type="button" title="scrollDown" ><img alt="" src={ScrollDown}></img></button>
            </div> 
        </div>
    )
};
