/* Bootstrap y CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.css'
/* Componentes */
import NavBar from './components/NavBar/NavBar'
import Portada from './components/Portada/Portada';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/* Router */
import { BrowserRouter , Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>  
      
      <Routes>
        <Route path='/' element={<> <Portada/> <ItemListContainer/> </>}/>
        <Route path='/:cat' element={<ItemListContainer/>}/>
        <Route path='/:cat/:name' element={<ItemDetailContainer/>}/>       
        <Route path='/cart' element={<h1>Sitio en construcción</h1>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;