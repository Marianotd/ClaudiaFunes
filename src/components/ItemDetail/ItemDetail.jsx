import React, { useState, useContext } from 'react'
// Iconos
import { CgArrowLeftO } from 'react-icons/cg'
// Router
import { Link } from 'react-router-dom'
// Loader
import { FadeLoader } from "react-spinners"
// Context
import { cartContext } from '../../context/CartContext'
// Componentes
import ItemCount from '../ItemCount/ItemCount'
import ButtonAdd from '../ButtonAdd/ButtonAdd'

export default function ItemDetail({ loading, data, initial, medidas, color, color2, tinta, tinta2 }) {
  const [cantCount, setCantCount] = useState(initial)
  const [state, setState] = useState(true)
  const [cantControl, setCantControl] = useState({class: '', text: ''})
  const { addItem } = useContext(cartContext)

  function cantAdd() {
    if(cantCount < data.stock ) {
        setCantControl({ class: '', text: ''})
        setCantCount(cantCount + 2)
    } else if(cantCount === data.stock){
        let maxCant = {class: 'cantControl', text: 'Límite de unidades alcanzado'} 
        setCantControl(maxCant)
    }
  }

  function cantSustract() {
    if(cantCount > 2 ) {
        setCantControl({ class: '', text: ''})
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
      { loading
          ? <div className='m-5'><FadeLoader color={'#ccc'} size={150} height={35} width={7.5} radius={35} margin={25} /></div>
          : <>
              <Link to={`/${data.category}`} className='buttonBack'>
                <CgArrowLeftO />
              </Link>
      
              <div className='itemDetail__img'>
                <img src={data.img} className='img-fluid' alt={data.name}/>
              </div>

              <div className='itemDetail__info col-md-5 d-flex flex-column justify-content-center align-items-center my-2'>
                <h3 className='itemDetail__title my-2'>{data.name}</h3>
                <p className='itemDetail__description'>{data.description}</p>
                { state 
                  ? <>
                      <p className='itemDetail__data'>Unidades disponibles: <span>{data.stock}</span></p>
                      <p className='itemDetail__data'>Valor: <span>${data.price}</span> c/u</p>
                      <ItemCount cantAdd={cantAdd} cantSustract={cantSustract} onAddToCart={onAddToCart} cantCount={cantCount} />
                      <span className={cantControl.class}>{cantControl.text}</span>
                    </>
                  : <ButtonAdd category={data.category}/>
                }
              </div>

              <div className='description mt-4 col-12'>
                <h5 className='mb-3'>Disponible en acabado mate o brillante</h5>
                <p>Medidas: <span>{medidas} mm</span></p>
                <p>Color papel: <span>{color} o {color2}</span></p>
                <p>Tinta: <span>{tinta} o {tinta2}</span></p>
              </div>
          </>
        }
    </div> 
  )
}
