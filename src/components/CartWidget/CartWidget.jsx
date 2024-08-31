import React, { useContext, useState, useEffect } from 'react'
// Iconos
import { BiShoppingBag } from 'react-icons/bi';
// Router
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';

export default function CartWidget() {
  const [cantCount, setCantCount] = useState(0)
  const { cartCount } = useContext(cartContext)

  useEffect(() => {
    setCantCount(cartCount())
  }, [cartCount])


  return (
    <Link to='/cart' className='relative text-3xl'>
      <BiShoppingBag />
      {
        cantCount > 0
          ? <span className='absolute -top-2 left-[50%] text-base bg-red-600 rounded-full w-6 h-6 text-white text-center'>
            {cantCount}
          </span>
          : ""
      }
    </Link>
  )
}