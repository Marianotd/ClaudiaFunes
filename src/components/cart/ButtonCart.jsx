import React from 'react'

export default function ButtonCart({ handleCheckOut }) {
  return (
    <button className='myButton' onClick={handleCheckOut}>Continuar compra</button>
  )
}
