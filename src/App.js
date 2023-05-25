
import './App.css';
import Collection from './components/Collection';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import HightLight from './components/HightLight';
import Search from './components/Search';
import Trending from './components/Trending';

function App() {
  return (
    <div>
       <Header />
       <Search />
       <Trending />
       <Collection />
       <Feature />
       <HightLight />
       <Footer />
    </div>
  );
}

export default App;
