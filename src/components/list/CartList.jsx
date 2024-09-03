import React from 'react'
import CartItem from '../cart/CartItem'

export default function CartList({ cartItems }) {
  return (
    cartItems.map(item => (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        img={item.img}
        price={item.price}
        count={item.count}
      />
    ))
  )
}
