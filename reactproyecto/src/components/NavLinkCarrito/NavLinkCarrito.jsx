import React from 'react'
import { BiShoppingBag } from 'react-icons/bi';

export default function NavLinkCarrito() {
  return (
    <a href='Carrito.html' className='col-6 col-md-12 text-center py-3 p-md-1'>
        <BiShoppingBag className='cartIcon'/>
    </a>
  )
}