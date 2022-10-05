import React, { useState, useEffect, useContext } from 'react'
/* Router */
import { Link } from 'react-router-dom'
/* Contexto */
import { cartContext } from '../../context/CartContext'
/* Componentes */
import CartList from '../CartList/CartList'
import CartItem from '../CartItem/CartItem'
import CartTotal from '../CartTotal/CartTotal'
import ClearCart from '../ClearCart/ClearCart'

export default function Cart() {
  const [state, setState] = useState()
  const { cart } = useContext(cartContext)  

  useEffect(() => {
    if(cart === undefined || cart.length == 0){
      setState(true)
    } else {
      setState(false)
    }
  }, [cart])

  return (
    <>
      <h2 className='sectionTitle mt-4 ps-4'>Resumen de compra</h2>
      <div className='cartListContainer'>
        { state
          ? <div className='noItems'>
              <h2>Aun no has añadido ningún producto al carrito</h2>
              <Link to='/'>Ir al inicio</Link>
            </div>
          : <>
            <CartList/>

            <div className='cartAside'>
              <ClearCart />
              <CartTotal />
            </div>
          </>      
        }
      </div>
    </>

  )
}
