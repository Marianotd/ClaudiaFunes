import React, { useState } from 'react'
// Router
import { Link, useNavigate } from 'react-router-dom'

export default function FormRegister() {
  const navigate = useNavigate()
  const [dataForm, setDataForm] = useState({
      name: '',
      surname: '', 
      email: '',
      phone: ''
  })
  let optionDay = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  let optionMonth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  function handleCheckOut(e){
    e.preventDefault()

  }

  function inputChangeHandler(e){
    let inputName = e.target.name
    let value = e.target.value

    const newDataForm = {...dataForm}
    newDataForm[inputName] = value
    setDataForm(newDataForm)
  }

  return (
    <div className='formContainer'>
      <form onSubmit={handleCheckOut} className='form form--login form--register'>
          <h2>Registrarse</h2>
          <h4>A continuación solicitamos puedas completar la siguiente información para continuar con el registro</h4>

          <label htmlFor="name">Nombre/s</label>
          <input value={dataForm.name} name='name' onChange={inputChangeHandler} type="text" required/>

          <label htmlFor="surname">Apellido/s</label>
          <input value={dataForm.surname} name='surname' onChange={inputChangeHandler} type="text" required/>

          <label htmlFor="email">Email</label>
          <input value={dataForm.email} name='email' onChange={inputChangeHandler} type="email" required/>

          <label htmlFor="phone">Telefono</label>
          <input value={dataForm.phone} name='phone' onChange={inputChangeHandler} type="phone" required/>

          <label htmlFor="phone">Fecha de nacimiento</label>
          <label htmlFor="day" className='text-center'>Día</label>
          <select value={dataForm.phone} name='day' onChange={inputChangeHandler} required>
            { optionDay.map(item => {
                return(
                    <option key={`day-${item}`} value={item}>{item}</option>
                )
                })
            }
          </select>

          <label htmlFor="month" className='text-center'>Mes</label>
          <select value={dataForm.phone} name='month' onChange={inputChangeHandler} required>
          { optionMonth.map(item => {
                return(
                    <option key={`month-${item}`} value={item}>{item}</option>
                )
                })
            }
          </select>

          <label htmlFor="year" className='text-center'>Año</label>
          <select value={dataForm.phone} name='year' onChange={inputChangeHandler} required></select>

          <Link to={'/Usuario'}>¿Ya tienes cuenta? Ve a Iniciar Sesión</Link>

          <button className='itemButton itemButton--large py-2' type='submit'>Registrarse</button>
      </form>
    </div>
  )
}
