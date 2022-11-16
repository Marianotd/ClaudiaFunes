import React from 'react'
// Router
import { Link } from 'react-router-dom'
// Imagenes
import LogoImg from './Logo.png'

export default function Logo() {
  const title = "La proporción aurea"

  return (
    <Link to='/' className='logo'>
      <img className="img img-fluid col-8" src={LogoImg} alt={title} />
      <h3 className="col-10 col-md-12 text-center m-0 p-0">{title}</h3>
      <h4 className="col-8 text-center m-0 p-0">De Claudia Funes</h4>
    </Link>
  )
}