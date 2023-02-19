export default function Footer(){
    return(
        <div className="box-footer">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#890089" fillOpacity="1" d="M0,64L40,69.3C80,75,160,85,240,101.3C320,117,400,139,480,138.7C560,139,640,117,720,101.3C800,85,880,75,960,101.3C1040,128,1120,192,1200,192C1280,192,1360,128,1400,96L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <div className="container">
                <div className="row">
                    <div className="col">    
                        <ul>
                            <h3 >Iconos utilizados</h3>
                            <li>
                                <a href="https://www.flaticon.es/iconos-animados-gratis/ubicacion" title="ubicación iconos animados">Ubicación Flaticon</a>
                            </li>
                            <li>
                                <a href="https://www.flaticon.es/iconos-animados-gratis/reloj" title="reloj iconos animados">Reloj Flaticon</a>
                            </li>
                            <li>
                                <a href="https://www.flaticon.es/iconos-animados-gratis/traje" title="traje iconos animados">Traje Flaticon</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className="mt-3">Desarrollado por <a href="https://www.linkedin.com/in/ariel-ayala-8180b8232/">Ariel 🤍</a></h3>
                        <h3 className="mt-4"><a href="https://github.com/arielAayala/invitationCard">Proyecto</a></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}