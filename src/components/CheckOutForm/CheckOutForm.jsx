import React, { useState, useContext } from 'react'
// Router
import { useNavigate } from 'react-router-dom'
// Firebase
import { createBuyOrder, getSingleItem, stockFit } from '../../services/firestore'
// Context
import { cartContext } from '../../context/CartContext'

export default function CheckOutForm() {
    const navigate = useNavigate()
    const { cart, totalCount, clearCart } = useContext(cartContext)  
    const [dataForm, setDataForm] = useState({
        email: '',
        name: '', 
        surname: '',
        phone: ''
    })

    function handleCheckOut(e){
      e.preventDefault()

      let orderCart = cart.map(item => {
        let itemMap = {id: item.id, name: item.name, count: item.count}
        return itemMap
      })

      const orderData = {
        buyer: dataForm,
        items: orderCart,
        date: new Date(),
        total: totalCount().total
      }
    
      createBuyOrder(orderData)
        .then(orderId => {
          navigate(`/Cart/Checkout/${orderId}`)
        })
          
      stockDiscuount()
      clearCart()
    }

    function inputChangeHandler(e){
        let inputName = e.target.name
        let value = e.target.value

        const newDataForm = {...dataForm}
        newDataForm[inputName] = value
        setDataForm(newDataForm)
    }

    function stockDiscuount(){
      cart.forEach(itemCart => {
        getSingleItem(itemCart.id)
          .then((itemResponse) => {
            itemResponse.stock -= itemCart.count
            
            stockFit(itemResponse)
          })
      })
    }

  return (
    <>
      <form onSubmit={handleCheckOut} className='form my-4'>
          <h2 className='mb-4'>Complete los siguientes datos para finalizar su compra</h2>
          <label htmlFor="email">Email:<span>*</span></label>
          <input value={dataForm.email} name='email' type="email" onChange={inputChangeHandler} required/>
          
          <label htmlFor="name">Nombre/s:<span>*</span></label>
          <input value={dataForm.name} name='name' type="text" onChange={inputChangeHandler} required/>

          <label htmlFor="surname">Apellido/s:<span>*</span></label>
          <input value={dataForm.surname} name='surname' type="text" onChange={inputChangeHandler} required/>

          <label htmlFor="phone">Teléfono:<span>*</span></label>
          <input value={dataForm.phone} name='phone' type="tel" onChange={inputChangeHandler} required/>

          <button className='itemButton itemButton--cart mb-2 py-2' type='submit'>Enviar</button>
      </form>
    </>

  )
}
