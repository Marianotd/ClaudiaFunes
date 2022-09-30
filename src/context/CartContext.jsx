import React, { useState, createContext } from 'react'

const CartContext = createContext()

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])

    function addItem(item, count){
        const newCart = cart.map( item => item)
        newCart.push({...item, count})
        setCart(newCart)
    }

    function cartCount(){
        let total = 0
        cart.forEach(item => total += item.count)
        return total
    }

  return (
    <CartContext.Provider value={{ cart, addItem, cartCount }}>
        {children}
    </CartContext.Provider>
  )
}

export {CartContext}