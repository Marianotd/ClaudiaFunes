import React from 'react'
// Router
import { Link } from 'react-router-dom'

export default function ButtonAdd() {
  return (
      <Link
        className='myButton'
        to={`/cart`}
        aria-label='Ir al carrito'
      >
        Ir al carrito
      </Link>
  )
}
