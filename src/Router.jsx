import { useEffect } from "react";
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Context
import CartContextProvider from './context/CartContext';
// Componentes
import AppLayout from "./layout/AppLayout";
import Home from "./views/Home";

import ItemListContainer from './components/list/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CheckOut from './components/CheckOut/CheckOut';
import Cart from './components/Cart/Cart';
import CheckOutOrder from './components/CheckOutOrder/CheckOutOrder';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';

export default function Router() {
    useEffect(() => {
        document.title = 'La Proporción Aurea'
    }, [])

    return (
        <CartContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/:cat' element={<ItemListContainer />} />
                        <Route path='/:cat/:id' element={<ItemDetailContainer />} />
                        <Route path='/Contacto' element={<Contact />} />
                        <Route path='/Contacto/:orderid' element={<CheckOutOrder collection={'messages'} message={'confirmando tu contacto'} message2={'solicitud'} />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/cart/checkout/' element={<CheckOut />} />
                        <Route path='/cart/checkout/:orderid' element={<CheckOutOrder collection={'orders'} message={'con la confirmación de tu compra'} message2={'compra'} />} />
                        <Route path='*' element={<NotFound text={'404: Page not found'} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}