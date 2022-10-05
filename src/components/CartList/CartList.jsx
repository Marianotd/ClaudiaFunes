import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import { cartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

export default function CartList() {
    const { cart } = useContext(cartContext)

  return (
    <>
      <div className='d-flex flex-column justify-content-evenly align-items-center'>
        {cart.map(item => (
              <CartItem 
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                count={item.count}
              />
            )
        )}
      </div>
    </>
    
  )
}
