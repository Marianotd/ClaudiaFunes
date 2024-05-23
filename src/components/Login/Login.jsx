import React from 'react'
// Componentes
import FormLogin from '../FormLogin/FormLogin'
import FormRegister from '../FormRegister/FormRegister'

export default function Login({ cat }) {
  return (
    <>
        { cat === 'Login'
            ? <FormLogin/>
            : <FormRegister/>
        }
    </> 
  )
}
