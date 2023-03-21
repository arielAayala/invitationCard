import ScrollDown from "../assets/static/scrolldown.gif"

export default function Header() {
    return(
        <div className="box-header">
            <div className="box-header-border">
                <div className="text-center ">
                    <div className="box-date-name">
                        <span className="fecha">
                            {process.env.REACT_APP_FECHA}
                        </span>
                        <h1>{process.env.REACT_APP_NOMBRE}</h1>
                        <h2>Festejemos mis 11 años</h2>
                    </div> 
                </div>
            </div>
            <div className="scrolldown w-100 text-center">
                    <button  type="button" title="scrollDown" onClick={()=>{document.getElementById("counter")?.scrollIntoView() }}><img alt="" src={ScrollDown}></img></button>
            </div> 
        </div>
    )
};
