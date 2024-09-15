import React, { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { IoMdClose } from "react-icons/io";

export default function ClearCart() {
  const { clearCart } = useContext(cartContext)

  const handleClearCart = () => {
    if (window.confirm("¿Está seguro de que desea vaciar el carrito?")) {
      clearCart()
    }
  }

  return (
    <button
      className='lg:col-start-2 w-fit flex gap-2 items-center self-end justify-self-end text-lg border border-textMain hover:border-main hover:bg-textMain hover:text-white font-medium rounded-xl px-4 py-2 ease-out duration-300'
      onClick={handleClearCart}
      aria-label="Limpiar carrito"
    >
      <IoMdClose /> Limpiar carrito
    </button>
  )
}
