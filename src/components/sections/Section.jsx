import React from 'react'
import ButtonSection from '../common/ButtonSection'

export default function Section({ item }) {
  return (
    <div key={item.name} className='categoryItem'>
      <img className='categoryItem__img' src={item.img} alt={item.name} />
      <div>
        <h4 className='categoryItem__title'>{item.name}</h4>
        <p className='categoryItem__text'>{item.description}</p>

        <ButtonSection text={"VER MÁS"} url={`/`} />
      </div>
    </div>
  )
}
