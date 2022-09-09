import React from 'react'
import LogoImg from './Logo.png'

export default function Logo() {
  const title = "TarotFunes"
  return (
    <div className="logoHeader d-flex flex-row flex-wrap align-content-center justify-content-center gap-2 col-5 col-md-2">
      <img className="img img-fluid col-3" src={LogoImg} alt="LogoClaudilla" />
      <h3 className="col-12 text-center m-0 p-0">{title}</h3>
    </div>
  )
}