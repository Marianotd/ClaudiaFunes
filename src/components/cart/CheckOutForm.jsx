import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { createBuyOrder, getSingleItem, stockFit } from '../../services/firestore'
import { cartContext } from '../../context/CartContext'
import { useForm } from 'react-hook-form'
import InputList from '../list/InputList'
import emailjs from '@emailjs/browser';

export default function CheckOutForm() {
  const navigate = useNavigate()
  const { cart, totalCount, clearCart } = useContext(cartContext)
  const formRef = useRef(null)

  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const inputList = ['user_name', 'user_email', 'user_phone']

  const sendEmail = async () => {
    try {
      const serviceID = 'service_dt7fknl'
      const publicKey = 'JVyKj_-FNFaFiqOWF'
      await emailjs.sendForm(serviceID, 'template_vmcw5ck', formRef.current, publicKey)
      await emailjs.sendForm(serviceID, 'template_mivsy1h', formRef.current, publicKey)
    } catch (error) {
      console.log("Error al enviar correo: " + error)
    }
  }

  const onSubmit = async (dataForm) => {
    let orderItems = cart.map(item => ({
      id: item.id,
      name: item.name,
      count: item.count,
    }))

    const orderData = {
      buyer: {
        user_name: dataForm.user_name,
        user_email: dataForm.user_email,
        user_phone: dataForm.user_phone
      },
      items: orderItems,
      date: new Date(),
      total: totalCount().total
    }

    try {
      const isStockAvailable = await verifyStock(cart)
      if (!isStockAvailable) {
        console.error("No hay stock suficiente en alguno de los productos.")
        return
      }

      let orderId = await createBuyOrder(orderData)
      await sendEmail()
      stockDiscuount()
      clearCart()
      navigate(`/cart/checkout/${orderId}`)
    } catch (error) {
      console.log(error)
    }
  }

  const verifyStock = async (cartItems) => {
    for (let itemCart of cartItems) {
      const itemResponse = await getSingleItem(itemCart.id)
      if (itemResponse.stock < itemCart.count) {
        return false
      }
    }
    return true
  }

  const stockDiscuount = async () => {
    try {
      for (const itemCart of cart) {
        const itemResponse = await getSingleItem(itemCart.id);
        itemResponse.stock -= itemCart.count;
        await stockFit(itemResponse);
      }
    } catch (error) {
      console.error("Error al actualizar el stock:", error);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-10 lg:w-3/4 mx-auto'
        ref={formRef}
      >
        <h2 className='titleSection'>Complete los siguientes datos para finalizar su compra</h2>

        <InputList
          data={inputList}
          register={register}
          watch={watch}
          errors={errors}
        />

        <button className='myButton' type='submit'>Enviar</button>
      </form>
    </>

  )
}
