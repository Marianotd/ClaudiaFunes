import React from 'react'

export default function ItemCount({cantAdd, cantSustract, onAddToCart, cantCount}) {
  return (
    <>
        <div className='itemCount col-4 d-flex flex-row align-items-center justify-content-around mb-2 my-2'>
            <button className='buttonCant col-3' onClick={() => cantSustract()}>-</button>
            <span className='spanCant col-6 text-center'>{cantCount}</span>
            <button className='buttonCant col-3' onClick={() => cantAdd()}>+</button>
        </div>
        <button className='itemButton py-1 mb-2 my-2' onClick={() => onAddToCart()}>Añadir</button>
    </>
  )
}
