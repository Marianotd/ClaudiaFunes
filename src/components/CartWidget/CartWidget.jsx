import React, { useContext, useState, useEffect } from 'react'
// Iconos
import { BiShoppingBag } from 'react-icons/bi';
// Router
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';

export default function CartWidget() {
  const [cantCount, setCantCount] = useState(0)
  const { cartCount } = useContext(cartContext)

  useEffect( () => {
    setCantCount(cartCount())
  }, [cartCount])


  return (
    <Link to='/cart' className='text-3xl cartWidget col-6 col-md-12 text-center text-decoration-none py-3 p-md-1'>
        <BiShoppingBag className='cartIcon'/>
        {cantCount > 0 ? <span className='cartNumber p-1'>{cartCount()}</span> : ""}
    </Link>
  )
}