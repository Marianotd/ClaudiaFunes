import React, { useState, createContext } from 'react'

const cartContext = createContext()

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([])

  function addItem(item, count) {
    if (isInCart(item.id)) {
      const newCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, count: cartItem.count + count } : cartItem
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, count }]);
    }
  }

  function subtractItem(id) {
    const newCart = cart.filter(item => item.id !== id)
    setCart(newCart)
  }

  function cartCount() {
    return cart.reduce((total, item) => total + item.count, 0)
  }

  function totalCount() {
    const subTotal = cart.reduce((acc, item) => acc + item.price * item.count, 0);
    const envio = subTotal >= 2000 ? "Gratis" : 250
    const total = subTotal >= 2000 ? subTotal : (subTotal + 250)
    return { subTotal, envio, total }
  }

  function isInCart(id) {
    return cart.some(item => item.id === id)
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <cartContext.Provider value={{ cart, addItem, cartCount, subtractItem, totalCount, clearCart }}>
      {children}
    </cartContext.Provider>
  )
}

export { cartContext }