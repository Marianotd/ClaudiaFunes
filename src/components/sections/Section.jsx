import React from 'react'

export default function Section({ item }) {
  return (
    <div key={item.name} className='categoryItem'>
      <div>
        <h4>{item.name}</h4>
      </div>
      <div>
        <img src={item.img} alt={item.name} />
        <p>{item.description}</p>
      </div>
    </div>
  )
}
