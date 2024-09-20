import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from '../../context/CartContext'
import CartList from '../list/CartList'
import CartTotal from './CartTotal'
import ClearCart from './ClearCart'
import CheckOutButton from './CheckOutButton'
import NotFound from '../../views/NotFound'

export default function Cart() {
  const navigate = useNavigate()
  const { cart } = useContext(cartContext)

  function handleCheckOut() {
    navigate(`/cart/checkout/`)
  }

  if (!cart) {
    console.error('Error al cargar el carrito de compras.')
    return <NotFound />
  }

  return (
    <div className='flex flex-col gap-6 p-4'>
      <h2 className='titleSection'>Resumen de compra</h2>
      <div className='min-h-screen md:w-2/3 lg:w-full mx-auto flex flex-col lg:grid grid-cols-2 grid-rows-[max-content_1fr]  items-center gap-6'>
        {
          cart.length === 0 ? (
            <div className='col-span-2 row-span-2 text-2xl flex flex-col gap-6 items-center font-medium self-center m-auto text-center'>
              <h2>Aun no has añadido ningún producto al carrito</h2>
              <Link
                className='myButton'
                to='/'
                aria-label="Volver al inicio"
              >
                Ir al inicio
              </Link>
            </div>
          ) : (
            <>
              <ClearCart />

              <CartList cartItems={cart} />

              <div className='flex flex-col items-center gap-6'>
                <CartTotal />

                <CheckOutButton handleCheckOut={handleCheckOut} />
              </div>
            </>
          )
        }
      </div>
    </div>

  )
}
