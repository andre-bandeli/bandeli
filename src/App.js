
import './App.css';
import Contato from './components/contato/Contato';
import Ferramentas from './components/ferramentas/Ferramentas';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/Nav/Navbar'
import Portfolio from './components/portfolio/Portfolio';
import Produtos from './components/produtos/Produtos';
import Separador from './components/separador/Separador';
import Sobre from './components/sobre/Sobre';
import Certificados from './components/certificados/Certificados'

function App() {

  
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Separador/>
      <Produtos/>
      <Portfolio/>
      <Sobre/>
      <Certificados/>
      <Ferramentas/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default App;
