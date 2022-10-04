import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function CartList() {
    const { cart } = useContext(CartContext)
    console.log(cart)
  return (
    <>
        {cart.map(item => (
            <div className={`item d-flex flex-column align-items-center justify-content-evenly gap-2 pb-3 mb-4`}>
                <img src={item.img} className="img-fluid h-75" alt={item.name}/>
                <h5>{item.name}</h5>
              </div> 
            )
        )}
    </>
    
  )
}
