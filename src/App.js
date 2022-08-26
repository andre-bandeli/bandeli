
import './App.css';
import Cards from './components/cards/Cards';
import Header from './components/header/Header';
import Navbar from './components/Nav/Navbar'
import Portfolio from './components/portfolio/Portfolio';
import Posts from './components/postagens/Posts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Cards/>
      <Portfolio/>
      <Posts/>
    </div>
  );
}

export default App;
