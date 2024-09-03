import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function ItemCount({ cantAdd, cantSustract, onAddToCart, cantCount, }) {
  function handleAdd() {
    cantAdd()
  }

  function handleSustract() {
    cantSustract()
  }

  function handleAddToCart() {
    onAddToCart()
  }

  return (
    <>
      <div className='flex items-center justify-around border border-textMain rounded-xl py-2 px-4'>
        <button
          className='flex items-center justify-center border border-textMain hover:border-main bg-secondary hover:bg-textMain hover:text-main rounded-full w-12 h-12 ease-out duration-300'
          onClick={handleSustract}>
          <FaMinus />
        </button>

        <span className='font-medium text-2xl'>{cantCount}</span>

        <button
          className='flex items-center justify-center border border-textMain hover:border-main bg-secondary hover:bg-textMain hover:text-main rounded-full w-12 h-12 ease-out duration-300'
          onClick={handleAdd}>
          <FaPlus />
        </button>
      </div>

      <button
        className='myButton'
        onClick={handleAddToCart}
      >
        Añadir
      </button>
    </>
  )
}
