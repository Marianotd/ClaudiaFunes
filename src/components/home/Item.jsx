import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ id, name, img, category }) {
  const urlDetail = `/${category}/${id}`
  let imgArray = Array.isArray(img)

  return (
    <div className='h-[675px] md:h-[625px] bg-secondary rounded-xl shadow-cardContainer p-2'>
      <div className='h-full text-center flex flex-col items-center justify-around bg-white/95 border border-textMain rounded-xl shadow-cardContainer p-2'>
        <h5 className='max-w-full truncate text-2xl font-bold'>- {name} -</h5>

        <div className='w-full max-h-[75%]'>
          <img
            src={imgArray ? img[0] : img}
            className="object-cover h-full mx-auto rounded-xl hover:scale-105 shadow-cardContainer ease-out duration-500"
            alt={name}
          />
        </div>

        <Link
          to={urlDetail}
          className='px-4 py-2 text-xl font-bold tracking-wide border border-textMain bg-secondary hover:bg-textMain hover:text-secondary rounded-xl shadow-cardButton ease-out duration-300'
        >
          Ver detalles
        </Link>
      </div>

    </div>
  )
}
