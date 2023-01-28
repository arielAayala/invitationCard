import mariposa from "../assets/static/mariposa.png"
import mariposa1 from "../assets/static/mariposa1.png"
import mariposa2 from "../assets/static/mariposa2.png"
export default function BackgroundHeader() {

    return(
        <div className="box-mariposa">
                <img className='mariposa m1' alt='mariposa' src={mariposa}></img>
                <img className='mariposa m2' alt='mariposa' src={mariposa1}></img>
                <img className='mariposa m3' alt='mariposa' src={mariposa2}></img>            
                <img className='mariposa m6' alt='mariposa' src={mariposa2}></img>
                <img className='mariposa m4' alt='mariposa' src={mariposa}></img>
                <img className='mariposa m5' alt='mariposa' src={mariposa1}></img>
        </div>

    )
};
