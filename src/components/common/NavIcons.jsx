import React from 'react'
import { useContext } from 'react';
// Iconos
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
// Componentes
import CartWidget from '../toCheck/CartWidget';
// Context
import { cartContext } from '../../context/CartContext';

export default function NavIcons({ setOpen, open }) {
  const { cart } = useContext(cartContext)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <div className="flex items-center justify-evenly gap-4">
      <button
        className={`lg:hidden text-3xl transition-transform duration-500 ease-out ${open ? 'rotate-90' : ''}`}
        type="button"
        onClick={handleClick}
      >
        {open ? <IoMdClose /> : <AiOutlineMenu />}
      </button>
      {
        (cart === undefined || cart.length === 0)
          ? <></>
          : <CartWidget />
      }
    </div>
  )
}
