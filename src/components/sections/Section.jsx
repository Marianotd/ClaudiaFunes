import React from 'react'
import ButtonSection from './ButtonSection'

export default function Section({ item }) {
  return (
    <div key={item.name} className='categoryItem'>

      <img className='image' src={item.img} alt={item.name} />

      <div className='text'>
        <h4 className='text__title'>{item.name}</h4>

        <div className='text__description'>
          {item.description}
        </div>

        <div>
          <ButtonSection text={"VER MÁS"} url={`#${item.name}`} />
        </div>

      </div>
    </div>
  )
}
