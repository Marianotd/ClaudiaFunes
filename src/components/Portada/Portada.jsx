import React from 'react'
/* Imagenes */
import PortadaImg from './portada.jpg'

export default function Portada() {
    let tit = "Tarot"
    let text = "Para alcanzar algo que nunca has tenido, tendrás que hacer algo que nunca has hecho"
  return (
    <section>
        <div className="portada">
            <img className="img-fluid" src={PortadaImg} alt={tit}/>
            <div className="divTextoPortada">
                <div className="textoPortada col-9 d-flex flex-wrap text-end">
                    <h3 className="col-12">{tit}</h3>
                    <p className="col-12">{text}</p>
                </div>
            </div>
        </div>
    </section>
  )
}