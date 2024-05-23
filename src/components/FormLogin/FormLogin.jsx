import React, { useState } from 'react'
// Router
import { Link, useNavigate } from 'react-router-dom'

export default function FormLogin() {
  const navigate = useNavigate()
  const [dataForm, setDataForm] = useState({
      user: '',
      password: '', 
  })

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
      <form onSubmit={handleCheckOut} className='form form--login'>
          <h2>Iniciar Sesión</h2>

          <label htmlFor="username">Usuario</label>
          <input value={dataForm.username} name='username' onChange={inputChangeHandler} type="text" required/>

          <label htmlFor="password">Contraseña</label>
          <input value={dataForm.password} name='password' onChange={inputChangeHandler} type="password" required/>

          <Link to={'/Usuario/Registro'}>¿Aun no tienes un usuario? Registrate</Link>

          <button className='itemButton itemButton--large py-2' type='submit'>Iniciar sesión</button>
      </form>
    </div>
  )
}
