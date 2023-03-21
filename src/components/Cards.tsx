import Maps from "./Maps";
import Style from "./Style";
import TimeTable from "./TimeTable";

export default function Cards() {
    
    return(
        <div className="box-cards">
            <h2 className="detail">Detalles</h2>
            <div className="container">
                <div className="row ">
                    <div className="col-6">
                        <Maps></Maps>
                    </div>
                    <div className="col-6">
                        <TimeTable></TimeTable>
                    </div>
                    <div className="col-12">
                        <Style></Style>
                    </div>
                </div>
            </div>
        </div>
    )
};
