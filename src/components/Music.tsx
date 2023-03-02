import { useEffect, useState } from "react";
import music from "../assets/static/musica-alternativa.png"

export default function Music({propsAudio, propsBool}:any){

    propsAudio.volume = 0.5

    const [playing, setPlaying] = useState(propsBool)

    const handleClickMusic = () =>{
        setPlaying(!playing)
    }


    useEffect(()=>{
        playing ? propsAudio.play() : propsAudio.pause()
    },[playing,propsAudio])

    return(
        <div className="box-music">
            <img src={music} alt="" onClick={handleClickMusic}/>
        </div>
    )
}