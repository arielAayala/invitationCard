import horario from "../assets/static/medianoche.gif"
export default function TimeTable() {
    return(
        <div className="box-map">
            <h2 className="mb-4">Horario</h2>

            <img src={horario} alt="" className="gif" />
            <br />
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#modalTime">
            + Info
            </button>

            <div className="modal fade" id="modalTime" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5" id="exampleModalLabel">Horario</h3>
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
                        </div>
                        <div className="modal-body">
                            <h5>Fecha: {process.env.REACT_APP_FECHA} </h5>
                            <h5>Hora: {process.env.REACT_APP_HORARIO} </h5>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    )
};