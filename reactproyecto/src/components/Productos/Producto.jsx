import React from 'react'
import ItemCount from './ItemCount'

export default function Producto({prodName, imgSrc, initial, stock}) {
  return (
    <div className='productos d-flex flex-column align-items-center justify-content-evenly gap-3 pb-3 mb-4'>
      <img src={imgSrc} className="img-fluid h-75" alt={prodName}/>
      <h5>{prodName}</h5>
      <ItemCount initial={initial} stock={stock}/>
    </div> 
  )
}
