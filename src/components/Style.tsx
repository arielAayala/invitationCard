import messi from "../assets/static/messi.jpg"

export default function Style() {
    return(
        <div className="box-map">
            <h2 className="mb-4">Vestimenta</h2>

            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#modalStyle">
            Ver mas
            </button>

            <div className="modal fade" id="modalStyle" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5" id="exampleModalLabel">Elegante sport</h3>
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">Cerrar</button>
                        </div>
                        <div className="modal-body">
                            <img src={messi} alt="messi"></img>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
    )
};
