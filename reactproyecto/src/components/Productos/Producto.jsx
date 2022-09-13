import React from 'react'

export default function Producto({prodName, imgSrc}) {
  return (
    <div className='productos d-flex flex-column align-items-center justify-content-evenly gap-3 pb-3 mb-4'>
      <img src={imgSrc} className="img-fluid" alt={prodName}/>
      <h5>{prodName}</h5>
      <button className='py-1'>Ver más</button>
    </div> 
  )
}
