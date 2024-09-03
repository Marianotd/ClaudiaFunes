import React, { useContext } from 'react'
// Context
import { cartContext } from '../../context/CartContext'

export default function ClearCart() {
    const { clearCart } = useContext(cartContext)

  return (
    <button className='itemButton itemButton--cart' onClick={() => clearCart()}>Limpiar carrito</button>
  )
}
