import React from 'react'
import ItemCount from './ItemCount'

export default function Producto({name, img, stock}) {
  return (
    <div className='productos d-flex flex-column align-items-center justify-content-evenly gap-3 pb-3 mb-4'>
      <img src={img} className="img-fluid h-75" alt={name}/>
      <h5>{name}</h5>
      <p>{}</p>
      <ItemCount initial={1} stock={stock}/>
    </div> 
  )
}
