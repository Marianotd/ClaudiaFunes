import React from 'react'
// Router
import { Link } from 'react-router-dom'

export default function ButtonAdd({ category }) {
  return (
    <>
        <Link className='itemButton itemButton--large py-1 my-2' to={`/cart`}>Ir al carrito</Link>
    </>

  )
}
