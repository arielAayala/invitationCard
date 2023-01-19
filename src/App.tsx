import Header from './components/Header';
import mariposa from "./assets/static/mariposa.png"
import Contador from './components/Contador';

function App() {
  return (
    <body>
      <img className='mariposa 1' src={mariposa}></img>
      <Header></Header>
      <Contador></Contador>
    </body>
  );
}

export default App;
