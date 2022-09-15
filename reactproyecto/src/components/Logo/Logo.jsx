import React from 'react'
import LogoImg from './Logo.png'

export default function Logo() {
  const title = "La proporción aurea"
  const subtitle = "De Claudia Funes"

  return (
    <div className='logoHeader d-flex flex-row flex-wrap align-content-center justify-content-center col-5 col-md-2 mx-auto'>
      <img className="img img-fluid col-8" src={LogoImg} alt="LogoClaudilla" />
      <h3 className="col-10 col-md-12 text-center m-0 p-0">{title}</h3>
      <h4 className="col-8 text-center m-0 p-0">{subtitle}</h4>
    </div>
  )
}