import React, { useState } from 'react'
// Router
import { useNavigate } from 'react-router-dom'
// Firebase
import { createMessage } from '../../services/firestore'

export default function FormContact() {
  const navigate = useNavigate()
  const [dataForm, setDataForm] = useState({
      name: '',
      email: '', 
      phone: '',
      file: '',
      commentary: ''
  })

  function handleCheckOut(e){
    e.preventDefault()
  
    createMessage(dataForm)
      .then(messageId => {
        navigate(`/contacto/${messageId}`)
      })
  }

  function inputChangeHandler(e){
    let inputName = e.target.name
    let value = e.target.value

    const newDataForm = {...dataForm}
    newDataForm[inputName] = value
    setDataForm(newDataForm)
  }

  return (
    <form onSubmit={handleCheckOut} className='form form--contact'>
        <h2 className='sectionTitle'>Formulario de contacto</h2>
        <h4>Nuestros asesores están listos para atenderte con cualquier consulta sobre tu pedido o información en general de la tienda Online.</h4>
        <input value={dataForm.name} name='name' onChange={inputChangeHandler} type="text" placeholder='Nombre/s y Apellido/s *' required/>
        <input value={dataForm.email} name='email' onChange={inputChangeHandler} type="email" placeholder='Correo electrónico *' required/>
        <input value={dataForm.phone} name='phone' onChange={inputChangeHandler} type="phone" placeholder='Teléfono *' required/>
        <label htmlFor="">Desea adjuntar algún archivo?</label>
        <input value={dataForm.file} name='file' onChange={inputChangeHandler} type="file"/>
        <label htmlFor="">Dejanos tu comentario:</label>
        <textarea value={dataForm.commentary} name='commentary' onChange={inputChangeHandler} className='py-2 px-3' cols="30" rows="12"></textarea>
        <button className='itemButton py-2' type='submit'>Enviar</button>
    </form>
  )
}
