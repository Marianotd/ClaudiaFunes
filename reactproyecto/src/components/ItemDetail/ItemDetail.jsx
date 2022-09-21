import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CgArrowLeftO } from 'react-icons/cg'


export default function ItemDetail({data}) {
  return (
    <div className='itemDetail'>
      <button className='itemDetail__buttonBack'>
        <CgArrowLeftO />
      </button>
      
      <div className='itemDetail__img'>
        <img src={data.img} className='img-fluid' alt={data.name}/>
      </div>
      <div className='itemDetail__info col-md-5 d-flex flex-column justify-content-center align-items-center my-2'>
        <h5 className='itemDetail__title my-2'>{data.name}</h5>
        <p className='itemDetail__description'>{data.description}</p>
        <p className='itemDetail__price'>Valor: <span>${data.price}</span> c/u</p>
        <ItemCount initial={2} stock={data.stock}/>
      </div>
    </div> 
  )
}
