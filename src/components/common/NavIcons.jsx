import React from 'react'
import { useContext } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import CartWidget from './CartWidget';
import { cartContext } from '../../context/CartContext';

export default function NavIcons({ setOpen, open }) {
  const { cart } = useContext(cartContext)

  return (
    <div className="flex items-center justify-evenly gap-4">
      <button
        className={`lg:hidden text-3xl transition-transform duration-500 ease-out ${open ? 'rotate-90' : ''}`}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="drawer"
      >
        {open ? <IoMdClose /> : <AiOutlineMenu />}
      </button>

      {cart && cart.length > 0 && <CartWidget />}
    </div>
  )
}
