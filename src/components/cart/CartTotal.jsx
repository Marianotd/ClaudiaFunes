import React, { useContext } from 'react'
import { cartContext } from '../../context/CartContext'

export default function CartTotal() {
  const { totalCount } = useContext(cartContext)
  const { subTotal, envio, total } = totalCount()

  return (
    <div className='flex flex-col gap-4 text-xl'>
      <p className='font-medium'>Subtotal: <span className='font-normal'>{subTotal}</span></p>
      <p className='font-medium'>Envío: <span className='font-normal'>{envio}</span></p>
      <h3 className='font-medium'>Total: <span className='font-normal'>${total}</span></h3>
    </div>
  )
}
