import Header from './components/Header';
import Counter from './components/Counter';
import BackgroundHeader from './components/BackgroundHeader';
import Cards from './components/Cards';
import Confirm from './components/Confirm';
import Footer from './components/footer';
import Music from './components/Music';
import {useState,useEffect} from "react"
import Loading from './components/Loading';

function App() {

  const audio = new Audio(require("./assets/audios/Taylor Swift - Style (Audio).mp3"))


  const [loading, setLoading] = useState(true)
  const [ask, setAsk] = useState(true)
  const [bool , setBool] = useState(false) 

  const handleBoolFalse = () =>{
    setBool(false)
    setAsk(false)
  }
  const handleBoolTrue = () =>{
    setBool(true)
    setAsk(false)
  }

  useEffect(()=>{
    setTimeout(() => setLoading(false),3000) 
  })
  

  if (loading) return <><div className='box-bg'></div><Loading></Loading></>


  if (ask)  return(
    <>
    <div className='box-bg'></div>
    <div className='box-ask '>
        <div className="container text-center w-50">
            <div className="row ">
                <div className="col-6 ">
                    <button className='btn' type='button' onClick={handleBoolTrue}>Ingresar con Musica</button>
                </div>
                <div className="col-6">
                    <button className='btn' type='button' onClick={handleBoolFalse}>Ingresar sin Musica</button>
                </div>
            </div>
        </div>
    </div>
    </>
)

  return (
    <>
      <div className='box-bg'></div>
      <div id='app' className='box-app'>
        <Music propsAudio={audio} propsBool={bool}></Music>
        <BackgroundHeader></BackgroundHeader>
        <Header></Header>
        <Counter></Counter>
        <Cards></Cards>
        <Confirm></Confirm>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

