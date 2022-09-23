import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CgArrowLeftO } from 'react-icons/cg'
import { Link } from 'react-router-dom'

export default function ItemDetail({data}) {
  let medidas = '297 x 420'
  let color = 'Blanco'
  let color2 = 'Negro'
  let tinta = 'Negro y Dorado'
  let tinta2 = 'Negro y Tornasol'

  return (
    <div className='itemDetail'>
      <Link to='/' className='itemDetail__buttonBack'>
        <CgArrowLeftO />
      </Link>
      
      <div className='itemDetail__img'>
        <img src={data.img} className='img-fluid' alt={data.name}/>
      </div>
      <div className='itemDetail__info col-md-5 d-flex flex-column justify-content-center align-items-center my-2'>
        <h3 className='itemDetail__title my-2'>{data.name}</h3>
        <p className='itemDetail__description'>{data.description}</p>
        <p className='itemDetail__price'>Valor: <span>${data.price}</span> c/u</p>
        <ItemCount initial={2} stock={data.stock}/>
      </div>
      <div className='description mt-4 col-12'>
        <h5 className='mb-3'>Disponible en acabado mate o brillante</h5>
        <p>Medidas: <span>{medidas} mm</span></p>
        <p>Color papel: <span>{color} o {color2}</span></p>
        <p>Tinta: <span>{tinta} o {tinta2}</span></p>
      </div>
    </div> 
  )
}
