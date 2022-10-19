import React, { useState, createContext } from 'react'

const cartContext = createContext()

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

    function sustractItem(id){
      const index = cart.findIndex( item => item.id === id)
      cart.splice(index, 1)
      const newCart = cart.map( item => item)
      setCart(newCart)
    }

    function cartCount(){
        let total = 0
        cart.forEach(item => total += item.count)
        return total
    }

    function totalCount(){
      let subTotal = 0
      cart.forEach(item => subTotal += (item.price * item.count))
      let envio = subTotal >= 2000 ? "Gratis" : 250
      let total = subTotal >= 2000 ? subTotal : (subTotal + envio)
      return {subTotal, envio, total}
    }

    function isInCart(id){
      let found = cart.some(item => item.id === id)
      return found
    }

    function clearCart(){
      cart.splice(0, cart.length)
      const newCart = cart.map( item => item)
      setCart(newCart)
    }

  return (
    <cartContext.Provider value={{ cart, addItem, cartCount, sustractItem, totalCount, clearCart }}>
        {children}
    </cartContext.Provider>
  )
}

export {cartContext}