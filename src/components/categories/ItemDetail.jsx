import React, { useState, useContext, useEffect } from 'react';
import { cartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';
import ButtonAdd from './ButtonAdd';
import BackButton from '../common/BackButton';

export default function ItemDetail({ data }) {
  const [cantCount, setCantCount] = useState(0);
  const [isInCart, setIsInCart] = useState(false);
  const [hasReachedLimit, setHasReachedLimit] = useState(false);
  const { addItem } = useContext(cartContext);

  useEffect(() => {
    if (hasReachedLimit) {
      const timeout = setTimeout(() => setHasReachedLimit(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [hasReachedLimit]);

  function cantAdd() {
    if (cantCount < data.stock) {
      setCantCount(cantCount + 1);
    } else {
      setHasReachedLimit(true);
    }
  }

  function cantSubtract() {
    if (cantCount > 2) {
      setCantCount(cantCount - 1);
      setHasReachedLimit(false);
    }
  }

  function onAddToCart() {
    if (data.stock > 0 && cantCount > 0) {
      addItem(data, cantCount);
      setIsInCart(false);
    }
  }

  return (
    <div className='flex flex-col gap-6 items-center'>
      <BackButton />

      <div className='flex flex-col lg:grid grid-cols-2 gap-8 lg:gap-x-10 text-center'>
        <h5 className='col-start-2 max-w-full lg:h-fit truncate text-2xl py-2 px-4 font-bold border shadow-cardContainer border-secondary rounded-xl bg-textMain text-secondary'>
          - {data.name} -
        </h5>

        <div className='row-span-4 row-start-1 col-start-1 border border-textMain p-2 rounded-xl shadow-cardContainer bg-main md:max-w-[50%] lg:max-w-max lg:h-fit mx-auto'>
          <img src={data.img} className='object-cover mx-auto rounded-xl shadow-cardContainer' alt={data.name} />
        </div>

        <p className='col-start-2 border flex items-center border-textMain rounded-xl p-4 text-xl font-semibold shadow-cardContainer'>
          {data.description}
        </p>

        <div className='col-start-2 flex flex-col justify-around gap-4'>
          {isInCart ? (
            <ButtonAdd />
          ) : (
            <>
              <p>
                Valor:
                <span className='ms-2 font-semibold me-2'>${data.price}</span> c/u
              </p>

              {data.stock === 0 ? (
                <p className='text-red-600 font-medium'>
                  No hay unidades disponibles en este momento
                </p>
              ) : (
                <ItemCount
                  cantAdd={cantAdd}
                  cantSustract={cantSubtract}
                  onAddToCart={onAddToCart}
                  cantCount={cantCount}
                />
              )}

              <span
                className={`text-red-600 font-medium transition-transform duration-300 ${hasReachedLimit ? 'animate-bounce' : ''}`}
              >
                {hasReachedLimit ? 'Ha alcanzado el límite de unidades disponibles' : ''}
              </span>
            </>
          )}
        </div>

        <div className='col-start-2 text-sm font-medium'>
          <h5 className='mb-3'>Disponible en acabado mate o brillante</h5>
          <p>Medidas: <span>297 x 420 mm</span></p>
          <p>Color papel: <span>Blanco o Negro</span></p>
          <p>Tinta: <span>Negro y Dorado o Negro y Tornasol</span></p>
        </div>
      </div>
    </div>
  );
}
