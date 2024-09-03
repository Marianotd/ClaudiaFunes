import React from 'react'
// Router
import { Link } from 'react-router-dom'
// Iconos
import { CgArrowLeftO } from 'react-icons/cg'
// Componentes
import CheckOutForm from './CheckOutForm'

export default function CheckOut() {
  return (
    <div className='p-3'>
      <Link to={`/cart`} className='buttonBack'>
        <CgArrowLeftO />
      </Link>
      <CheckOutForm />
    </div>
  )
}
