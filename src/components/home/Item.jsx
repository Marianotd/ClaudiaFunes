import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ id, name, img, category }) {
  const urlDetail = `/${category}/${id}`

  return (
    <div className='h-[675px] md:h-[625px] bg-secondary rounded-xl shadow-cardContainer p-2'>
      <div className='h-full text-center flex flex-col items-center justify-around bg-white/95 border border-textMain rounded-xl shadow-cardContainer p-2'>
        <h5 className='max-w-full truncate text-2xl font-bold'>- {name} -</h5>

        <div className='w-full max-h-[75%]'>
          <img
            src={img}
            className="object-cover h-full mx-auto rounded-xl hover:scale-105 shadow-cardContainer ease-out duration-500"
            alt={name}
          />
        </div>

        <Link
          to={urlDetail}
          className='myButton'
        >
          Ver detalles
        </Link>
      </div>

    </div>
  )
}
