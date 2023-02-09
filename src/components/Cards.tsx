import Maps from "./Maps";
import Style from "./Style";
import TimeTable from "./TimeTable";

export default function Cards() {
    
    return(
        <div className="box-cards">
            <h2 className="detail">Detalles</h2>
            <div className="container">
                <div className="row gap-4">
                    <div className="col">
                        <Maps></Maps>
                    </div>
                    <div className="col">
                        <TimeTable></TimeTable>
                    </div>
                    <div className="col">
                        <Style></Style>
                    </div>
                </div>
            </div>
        </div>
    )
};
