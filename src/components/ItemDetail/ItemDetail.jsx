import React from 'react'
/* Componentes */
import ItemCount from '../ItemCount/ItemCount'
/* Iconos */
import { CgArrowLeftO } from 'react-icons/cg'
/* Router */
import { Link } from 'react-router-dom'
/* Spiner */
import { FadeLoader } from "react-spinners";

export default function ItemDetail({loading, data, medidas, color, color2, tinta, tinta2}) {

  return (
    <div className='itemDetail'>
      <Link to='/' className='itemDetail__buttonBack'>
        <CgArrowLeftO />
      </Link>
      
      <div className='itemDetail__img'>
        <img src={data.img} className='img-fluid' alt={data.name}/>
      </div>
      <div className='itemDetail__info col-md-5 d-flex flex-column justify-content-center align-items-center my-2'>
        <FadeLoader color={'#ccc'} loading={loading} size={150} height={35} width={7.5} radius={35} margin={25} />
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
