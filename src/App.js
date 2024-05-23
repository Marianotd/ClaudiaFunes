// CSS y Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.css'
// Componentes
import Header from './components/common/Header'
import Portada from './components/Portada/Portada';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CheckOut from './components/CheckOut/CheckOut';
import Cart from './components/Cart/Cart';
import CheckOutOrder from './components/CheckOutOrder/CheckOutOrder';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Context
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* <Route path='/' element={<> <Portada/> <ItemListContainer/> </>}/>
          <Route path='/Productos/:cat' element={<ItemListContainer/>}/>
          <Route path='/Productos/:cat/:id' element={<ItemDetailContainer/>}/>   
          <Route path='/Contacto' element={<Contact />} />    
          <Route path='/Contacto/:orderid' element={<CheckOutOrder collection={'messages'} message={'confirmando tu contacto'} message2={'solicitud'} />} /> 
          <Route path='/Usuario' element={<Login cat={'Login'}/>}/>
          <Route path='/Usuario/Registro' element={<Login cat={'Register'}/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Cart/Checkout/' element={<CheckOut />} />
          <Route path='/Cart/Checkout/:orderid' element={<CheckOutOrder collection={'orders'} message={'con la confirmación de tu compra'} message2={'compra'} />} />
          <Route path='*' element={<NotFound text={'404: Page not found'}/>}/> */}
        </Routes>

        {/* <Footer/> */}
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;