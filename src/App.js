
import './App.css';
import Cards from './components/cards/Cards';
import Contato from './components/contato/Contato';
import Ferramentas from './components/ferramentas/Ferramentas';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/Nav/Navbar'
import Portfolio from './components/portfolio/Portfolio';
import Posts from './components/postagens/Posts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Portfolio/>
      <Cards/>
      <Posts/>
      <Ferramentas/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default App;
