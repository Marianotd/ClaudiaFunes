import React, { useContext } from 'react'
// Context
import { cartContext } from '../../context/CartContext'

export default function CartItem({id, name, img, price, count}) {
  const { sustractItem } = useContext(cartContext)

  return (
    <div className='cartItem my-3'>
        <button className='removeItem' onClick={() => sustractItem(id)}>X</button>
        { Array.isArray(img)
            ? <img src={img[0]} className="img-fluid h-100" alt={name}/>
            : <img src={img} className="img-fluid h-100" alt={name}/>
        }
        <div className='cartItemDetail'>
            <h4>{name}</h4>
            <p><span>Cantidad:</span> {count}u</p>
            <p><span>SubTotal:</span> ${price * count}</p>
        </div>
    </div> 
  )
}
