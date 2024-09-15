import React from 'react'
import CheckOutForm from './CheckOutForm'
import BackButton from '../common/BackButton'

export default function CheckOut() {
  return (
    <div className='flex flex-col gap-6 p-4 min-h-screen'>
      <BackButton />

      <h2 className="text-3xl font-bold text-center">Completar Compra</h2>

      <CheckOutForm />
    </div>
  )
}
