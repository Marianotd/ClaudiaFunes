import React from 'react'
import Producto from '../Producto/Producto'
import ArcanoElCarro from './ArcanoElCarro.jpg'
import ArquetipoTierra from './ArquetipoTierra.jpg'
import ArquetipoFuego from './ArquetipoFuego.jpg'
import ArquetipoOro from './ArquetipoOro.jpg'
import ArquetipoAire from './ArquetipoAire.jpg'

export default function DivProductos() {
  let tit = "Ilustraciones"

  return (
    <section>
      <h2 className='sectionTitle my-2 ps-4'>{tit}</h2>
      <div className="contProductos d-flex flex-row flex-wrap justify-content-evenly align-content-center p-4">
          <Producto prodName="Arcano el Carro" imgSrc={ArcanoElCarro}/>
          <Producto prodName="Arquetipo Tierra" imgSrc={ArquetipoTierra}/>
          <Producto prodName="Arquetipo Fuego" imgSrc={ArquetipoFuego}/>
          <Producto prodName="Arquetipo Oro" imgSrc={ArquetipoOro}/>
          <Producto prodName="Arquetipo Aire" imgSrc={ArquetipoAire}/>
      </div>
    </section>
  )
}
