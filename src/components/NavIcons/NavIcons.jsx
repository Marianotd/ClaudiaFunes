import React from 'react'
import { useContext } from 'react';
// Iconos
import { CgMenu } from 'react-icons/cg';
// Componentes
import CartWidget from '../CartWidget/CartWidget';
// Context
import { cartContext } from '../../context/CartContext';

export default function NavIcons({ setOpen, open }) {
  const { cart } = useContext(cartContext)

  function handleClick(){
      setOpen(!open)
  }
    
  return (
    <div className="menuHeader order-md-2">                   
        <button className='d-md-none' type="button" onClick={handleClick}><CgMenu className='menuHamburguesa'/></button>      
        { (cart === undefined || cart.length === 0)
          ? <></>
          : <CartWidget/>
        }
    </div>
  )
}
