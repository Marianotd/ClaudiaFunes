import { useEffect } from "react";
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Context
import CartContextProvider from './context/CartContext';
// Componentes
import AppLayout from "./layout/AppLayout";
import Home from "./views/Home";
import CategoryContainer from "./views/CategoryContainer";
import ItemDetailContainer from "./views/ItemDetailContainer";
import Contact from './views/Contact';
import CheckOutOrder from './components/contact/CheckOutOrder';
import Cart from './components/cart/Cart';

import CheckOut from './components/toCheck/CheckOut';
import NotFound from './components/toCheck/NotFound';

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
                        <Route path='/:cat' element={<CategoryContainer />} />
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