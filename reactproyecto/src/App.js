import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.css'
import NavBar from './components/NavBar/NavBar'
import DivProductos from './components/DivProductos/DivProductos';

function App() {
  return (
    <>
      <NavBar />  
      <DivProductos/>
    </>
  );
}

export default App;
