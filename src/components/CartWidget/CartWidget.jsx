import React, { useContext } from 'react'
/* Iconos */
import { BiShoppingBag } from 'react-icons/bi';
/* Router */
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function CartWidget() {
  const { cartCount } = useContext(CartContext)

  return (
    <Link to='/cart' className='col-6 col-md-12 text-center py-3 p-md-1'>
        <BiShoppingBag className='cartIcon'/>
        <span>{cartCount()}</span>
    </Link>
  )
}