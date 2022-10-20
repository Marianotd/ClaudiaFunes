/* Bootstrap y CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.css'
/* Componentes */
import NavBar from './components/NavBar/NavBar'
import Portada from './components/Portada/Portada';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CheckOut from './components/CheckOut/CheckOut';
import Cart from './components/Cart/Cart';
import CheckOutOrder from './components/CheckOutOrder/CheckOutOrder';
/* Router */
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import CartContextProvider from './context/CartContext';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>  
        
        <Routes>
          <Route path='/' element={<> <Portada/> <ItemListContainer/> </>}/>
          <Route path='/:cat' element={<ItemListContainer/>}/>
          <Route path='/:cat/:id' element={<ItemDetailContainer/>}/>       
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/cart/checkout/' element={<CheckOut />} />
          <Route path='/cart/checkout/:orderid' element={<CheckOutOrder />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;