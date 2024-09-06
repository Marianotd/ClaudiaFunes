import React, { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import { FaTrash } from "react-icons/fa";

export default function CartItem({ id, name, img, price, count }) {
  const { sustractItem } = useContext(cartContext)

  const handleSustract = () => {
    if (sustractItem) {
      sustractItem(id)
    } else {
      console.error('sustractItem no está disponible en el contexto.')
    }
  }

  return (
    <div className='w-full border border-textMain flex flex-col rounded-xl p-4 shadow-cardContainer'>
      <div className='flex justify-between gap-4'>
        <div className='border border-textMain p-2 rounded-xl shadow-cardContainer bg-main w-[50%] lg:max-w-fit lg:max-h-64'>
          <img src={img} className='object-cover mx-auto rounded-xl h-full shadow-cardContainer' alt={name} />
        </div>

        <div className='flex flex-col gap-4 w-[50%]'>
          <button
            className='text-2xl self-end hover:text-secondary ease-out duration-300'
            onClick={handleSustract}
            aria-label={`Eliminar ${name} del carrito`}
          >
            <FaTrash />
          </button>

          <div className='flex flex-col justify-around h-full'>
            <h4 className='font-bold text-xl'>- {name} -</h4>
            <p className='truncate'>
              <span className='font-medium'>Cantidad: </span>
              {count}un.
            </p>

            <p className='truncate'>
              <span className='font-medium'>SubTotal: </span>
              ${price * count}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
