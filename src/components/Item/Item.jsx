import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({name, img}) {
  const urlDetail = `/ilustraciones/${name}`

  return (
    <div className='item d-flex flex-column align-items-center justify-content-evenly gap-2 pb-3 mb-4'>
      <img src={img} className="img-fluid h-75" alt={name}/>
      <h5>{name}</h5>
      <Link to={urlDetail} className='buttonAdd py-1'>Ver más</Link>
    </div> 
  )
}
