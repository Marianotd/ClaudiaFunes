import React, { useContext } from 'react'
import { cartContext } from '../../context/CartContext'

export default function CartTotal() {
    const { totalCount } = useContext(cartContext)
    const { subTotal, envio, iva, total } = totalCount()

  return (
    <div className='cartTotal my-3 py-4'>
        <p>Subtotal:</p> <span>{subTotal}</span>
        <p>IVA:</p> <span>{iva}</span>
        <p>Envío:</p> <span>{envio}</span>
        <h3>Total:</h3> <span className='spanTotal'>${total}</span>
    </div>
  )
}
