import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.css'
import NavBar from './components/NavBar/NavBar'
import DivProductos from './components/Productos/ProductContainer';
import Portada from './components/Portada/Portada';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar/>  
      <Portada/>
      <DivProductos/>
      <Footer/>
    </>
  );
}

export default App;
