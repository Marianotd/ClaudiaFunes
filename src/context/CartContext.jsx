import React, { useState, createContext } from 'react'

const CartContext = createContext()

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])

    function addItem(item, count){
      if(isInCart(item.id)){
        const newCart = cart.map( itemCart => {
          if(itemCart.id === item.id){
            itemCart.count += count
            return itemCart
          } else {
            return itemCart
          }
        })
        setCart(newCart)
      } else {
        const newCart = cart.map( item => item)
        newCart.push({...item, count})
        setCart(newCart)
      }
    }

    function cartCount(){
        let total = 0
        cart.forEach(item => total += item.count)
        return total
    }

    function isInCart(id){
      let found = cart.some(item => item.id === id)
      return found
    }

  return (
    <CartContext.Provider value={{ cart, addItem, cartCount }}>
        {children}
    </CartContext.Provider>
  )
}

export {CartContext}