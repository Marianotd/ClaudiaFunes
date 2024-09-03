import React, { useContext } from 'react'
// Context
import { cartContext } from '../../context/CartContext'
// Componentes
import CartItem from './CartItem'

export default function CartList() {
  const { cart } = useContext(cartContext)

  return (
    <div className='cartList'>
      {
        cart.map(item => (
          <CartItem 
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            count={item.count}
          />
        ))
      }
    </div>    
  )
}
