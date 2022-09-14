import React from 'react'
import Producto from './Producto'

/* Imagenes */
import ArcanoElCarro from './ArcanoElCarro.jpg'
import ArquetipoTierra from './ArquetipoTierra.jpg'
import ArquetipoFuego from './ArquetipoFuego.jpg'
import ArquetipoOro from './ArquetipoOro.jpg'
import ArquetipoAire from './ArquetipoAire.jpg'

export default function ProductContainer() {
  let tit = "Ilustraciones"

  return (
    <section>
      <h2 className='sectionTitle my-2 ps-4'>{tit}</h2>
      <div className="contProductos d-flex flex-row flex-wrap justify-content-evenly align-content-center p-4">
          <Producto prodName="Arcano el Carro"  imgSrc={ArcanoElCarro}   initial={1} stock={0}/>
          <Producto prodName="Arquetipo Tierra" imgSrc={ArquetipoTierra} initial={1} stock={20}/>
          <Producto prodName="Arquetipo Fuego"  imgSrc={ArquetipoFuego}  initial={1} stock={12}/>
          <Producto prodName="Arquetipo Oro"    imgSrc={ArquetipoOro}    initial={1} stock={3}/>
          <Producto prodName="Arquetipo Aire"   imgSrc={ArquetipoAire}   initial={1} stock={8}/>
      </div>
    </section>
  )
}
