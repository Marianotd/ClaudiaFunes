import React, { useState, useContext } from 'react'
/* Componentes */
import ItemCount from '../ItemCount/ItemCount'
import ButtonAdd from '../ButtonAdd/ButtonAdd';
/* Iconos */
import { CgArrowLeftO } from 'react-icons/cg'
/* Router */
import { Link } from 'react-router-dom'
/* Spiner */
import { FadeLoader } from "react-spinners";
/* Context */
import { CartContext } from '../../context/CartContext';

export default function ItemDetail({ loading, data, initial, medidas, color, color2, tinta, tinta2 }) {
  const [cantCount, setCantCount] = useState(initial)
  const [state, setState] = useState(true)
  const { addItem } = useContext(CartContext)

  function cantAdd() {
    if(cantCount < data.stock ) {
        setCantCount(cantCount + 2)
    }
  }

  function cantSustract() {
      if(cantCount > 2 ) {
          setCantCount(cantCount - 2)
      }
  }

  function onAddToCart(){
    setCantCount(initial)
      if(data.stock > 0) {
          setState(false)
      }
    addItem(data, cantCount)
  }

  return (
    <div className='itemDetail'>
      <Link to={`/${data.category}`} className='itemDetail__buttonBack'>
        <CgArrowLeftO />
      </Link>
      
      <div className='itemDetail__img'>
        <img src={data.img} className='img-fluid' alt={data.name}/>
      </div>
      <div className='itemDetail__info col-md-5 d-flex flex-column justify-content-center align-items-center my-2'>
        <FadeLoader color={'#ccc'} loading={loading} size={150} height={35} width={7.5} radius={35} margin={25} />
        <h3 className='itemDetail__title my-2'>{data.name}</h3>
        <p className='itemDetail__description'>{data.description}</p>
        { state 
          ? <>
              <p className='itemDetail__price'>Valor: <span>${data.price}</span> c/u</p>
              <ItemCount cantAdd={cantAdd} cantSustract={cantSustract} onAddToCart={onAddToCart} cantCount={cantCount} />
            </>
          : <>
              <p className='itemDetail__price'>Cantidad seleccionada: <span>{cantCount}</span></p>
              <p className='itemDetail__price'>SubTotal: <span>${cantCount * data.price}</span></p>
              <ButtonAdd category={data.category}/>
            </>
          
        }
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
