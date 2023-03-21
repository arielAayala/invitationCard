import maps from "../assets/static/ubicacion.gif"

export default function Maps() {
    return(
        <div className="box-map">
            <h2 className="mb-4">Ubicación</h2>
            <img src={maps} alt="" className="gif" />
            <br></br>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#modalMap">
            Como llegar
            </button>

            <div className="modal fade" id="modalMap" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5" id="exampleModalLabel">Avenida Pueyrredón 355</h3>
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
                        </div>
                        <div className="modal-body">
                            <iframe  title="maps" src={process.env.REACT_APP_MAPS}
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
    )
};
