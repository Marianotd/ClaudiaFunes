import React from 'react'
import ItemCount from './ItemCount'

export default function Producto({name, img, stock, price}) {
  return (
    <div className='productos d-flex flex-column align-items-center justify-content-evenly gap-2 pb-3 mb-4'>
      <img src={img} className="img-fluid h-75" alt={name}/>
      <h5>{name}</h5>
      <p>Valor: ${price} c/u</p>
      <ItemCount initial={2} stock={stock}/>
    </div> 
  )
}
