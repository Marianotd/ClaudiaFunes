import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

export default function ItemCount({ cantAdd, cantSubtract, onAddToCart, cantCount }) {
  return (
    <>
      <div className='flex items-center justify-around border border-textMain rounded-xl py-2 px-4'>
        <button
          className='flex items-center justify-center border border-textMain hover:border-main bg-secondary hover:bg-textMain hover:text-main rounded-full w-12 h-12 ease-out duration-300'
          onClick={cantSubtract}
          aria-label="Restar cantidad"
        >
          <FaMinus />
        </button>

        <span className='font-medium text-2xl'>{cantCount}</span>

        <button
          className='flex items-center justify-center border border-textMain hover:border-main bg-secondary hover:bg-textMain hover:text-main rounded-full w-12 h-12 ease-out duration-300'
          onClick={cantAdd}
          aria-label="Añadir cantidad"
        >
          <FaPlus />
        </button>
      </div>

      <button
        className='myButton'
        onClick={onAddToCart}
        aria-label="Añadir al carrito"
      >
        Añadir
      </button>
    </>
  )
}
