import React from 'react'
import { Link } from 'react-router-dom'
import CheckOutForm from '../CheckOutForm/CheckOutForm'
/* Iconos */
import { CgArrowLeftO } from 'react-icons/cg'

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
