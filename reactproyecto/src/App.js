/* Bootstrap y CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.css'
/* Componentes */
import NavBar from './components/NavBar/NavBar'
import Portada from './components/Portada/Portada';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/Productos/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>  
      <Portada/>
      <ItemListContainer/>
      <Footer/>
    </>
  );
}

export default App;