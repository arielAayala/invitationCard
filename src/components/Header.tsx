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
            </div>      
        </div>
    )
};
