import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../context/CartContext'
import NotFound from '../../views/NotFound'

export default function CartTotal() {
  const { totalCount } = useContext(cartContext)
  const [error, setError] = useState(false)
  let subTotal = 0
  let envio = 0
  let total = 0

  useEffect(() => {
    const handleTotals = () => {
      setError(false)
      if (totalCount) {
        const totals = totalCount()
        subTotal = totals.subTotal || 0
        envio = totals.envio || 0
        total = totals.total || 0
      } else {
        setError(true)
        console.error('Ha ocurrido un error al llamar el detalle de los totales.')
      }
    }

    handleTotals()
  }, [])

  if (error) (
    <NotFound />
  )

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price)
  }

  return (
    <div className='flex flex-col gap-4 text-xl'>
      <p className='font-medium'>Subtotal: <span className='font-normal'>{formatPrice(subTotal)}</span></p>
      <p className='font-medium'>Envío: <span className='font-normal'>{formatPrice(envio)}</span></p>
      <h3 className='font-medium'>Total: <span className='font-normal'>${formatPrice(total)}</span></h3>
    </div>
  )
}
