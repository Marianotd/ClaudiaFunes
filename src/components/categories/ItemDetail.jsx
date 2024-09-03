import React, { useState, useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import ItemCount from '../toCheck/ItemCount'
import ButtonAdd from '../toCheck/ButtonAdd'
import BackButton from '../common/BackButton';

export default function ItemDetail({ data }) {
  const [cantCount, setCantCount] = useState(0)
  const [state, setState] = useState(true)
  const [cantControl, setCantControl] = useState({ class: '', text: '' })
  const { addItem } = useContext(cartContext)

  function cantAdd() {
    if (cantCount < data.stock) {
      setCantControl({ class: '', text: '' })
      setCantCount(cantCount + 2)
    } else if (cantCount === data.stock) {
      let maxCant = { class: 'cantControl', text: 'Límite de unidades alcanzado' }
      setCantControl(maxCant)
    }
  }

  function cantSustract() {
    if (cantCount > 2) {
      setCantControl({ class: '', text: '' })
      setCantCount(cantCount - 2)
    }
  }

  function onAddToCart() {
    if (data.stock > 0) {
      setState(false)
    }
    addItem(data, cantCount)
  }

  return (
    <div className='flex flex-col gap-6 items-center'>
      <BackButton />

      <div className='flex flex-col gap-8 text-center'>
        <h5 className='max-w-full truncate text-2xl py-2 px-4 font-bold border shadow-cardContainer border-secondary rounded-xl bg-textMain text-secondary'>- {data.name} -</h5>

        <div className='border border-textMain p-2 rounded-xl shadow-cardContainer bg-main'>
          <img src={data.img} className='object-cover mx-auto rounded-xl shadow-cardContainer' alt={data.name} />
        </div>

        <p className='border border-textMain rounded-xl p-4 text-xl font-semibold shadow-cardContainer'>
          {data.description}
        </p>

        <div className='flex flex-col gap-2'>
          {
            state ? (
              <>
                <p className='font-semibold'>
                  Unidades disponibles:
                  <span className='ms-2'>{data.stock}</span>
                </p>

                <p className='text-sm font-semibold'>
                  Valor:
                  <span>${data.price}</span>
                  c/u
                </p>

                <ItemCount
                  cantAdd={cantAdd}
                  cantSustract={cantSustract}
                  onAddToCart={onAddToCart}
                  cantCount={cantCount}
                />

                <span className={cantControl.class}>{cantControl.text}</span>
              </>
            ) : (
              <ButtonAdd category={data.category} />
            )
          }
        </div>

        <div className='description mt-4 col-12'>
          <h5 className='mb-3'>Disponible en acabado mate o brillante</h5>
          <p>Medidas: <span>297 x 420 mm</span></p>
          <p>Color papel: <span>Blanco o Negro</span></p>
          <p>Tinta: <span>Negro y Dorado o Negro y Tornasol</span></p>
        </div>
      </div>
    </div >
  )
}
