/* Bootstrap y CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.css'
/* Componentes */
import NavBar from './components/NavBar/NavBar'
import Portada from './components/Portada/Portada';
import Footer from './components/Footer/Footer';
import ProductContainer from './components/Productos/ProductContainer';

function App() {
  return (
    <>
      <NavBar/>  
      <Portada/>
      <ProductContainer/>
      <Footer/>
    </>
  );
}

export default App;