import React from 'react'
import Producto from '../Producto/Producto'
import ArcanoElCarro from './ArcanoElCarro.jpg'
import ArquetipoCopas from './ArquetipoCopas.jpg'
import ArquetipoFuego from './ArquetipoFuego.jpg'
import ArquetipoOro from './ArquetipoOro.jpg'

export default function DivProductos() {
  return (
    <section>
      <h2 className='sectionTitle my-2 ps-4'>Ilustraciones</h2>
      <div className="contProductos d-flex flex-row flex-wrap justify-content-evenly align-content-center p-4">
          <Producto prodName="Arcano el Carro" imgSrc={ArcanoElCarro}/>
          <Producto prodName="Arquetipo Copas" imgSrc={ArquetipoCopas}/>
          <Producto prodName="Arquetipo Fuego" imgSrc={ArquetipoFuego}/>
          <Producto prodName="Arquetipo Oro" imgSrc={ArquetipoOro}/>
      </div>
    </section>
  )
}
