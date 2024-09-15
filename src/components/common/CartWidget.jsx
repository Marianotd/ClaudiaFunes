import React, { useContext } from 'react'
import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';

export default function CartWidget() {
  const { cartCount } = useContext(cartContext)
  const cantCount = cartCount();

  return (
    <Link to='/cart' aria-label='Ir al carrito' className='relative text-3xl'>
      <BiShoppingBag />
      {
        cantCount > 0 && (
          <span className='absolute -top-2 left-[55%] text-base bg-red-600 rounded-full w-6 h-6 text-white text-center'>
            {cantCount}
          </span>
        )
      }
    </Link>
  )
}