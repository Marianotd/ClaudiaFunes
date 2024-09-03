import React from 'react'

export default function ButtonCart({ handleCheckOut }) {
  return (
    <button className='itemButton mb-5 py-2' onClick={handleCheckOut}>Continuar compra</button>
  )
}
