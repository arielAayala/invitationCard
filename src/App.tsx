import Header from './components/Header';
import Counter from './components/Counter';
import BackgroundHeader from './components/BackgroundHeader';
import Cards from './components/Cards';
import Confirm from './components/Confirm';
import Footer from './components/footer';

function App() {
  return (
    <>
      <BackgroundHeader></BackgroundHeader>
      <Header></Header>
      <Counter></Counter>
      <Cards></Cards>
      <Confirm></Confirm>
      <Footer></Footer>
    </>
  );
}

export default App;
