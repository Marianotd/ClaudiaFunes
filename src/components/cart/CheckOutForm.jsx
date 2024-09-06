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
      await emailjs.sendForm('service_dt7fknl', 'template_vmcw5ck', formRef.current, {
        publicKey: 'JVyKj_-FNFaFiqOWF',
      })
      await emailjs.sendForm('service_dt7fknl', 'template_mivsy1h', formRef.current, {
        publicKey: 'JVyKj_-FNFaFiqOWF',
      })
    } catch (error) {
      console.log(error)
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
      let orderId = await createBuyOrder(orderData)
      // await sendEmail()
      stockDiscuount()
      clearCart()
      navigate(`/cart/checkout/${orderId}`)
    } catch (error) {
      console.log(error)
    }
  }


  function stockDiscuount() {
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
