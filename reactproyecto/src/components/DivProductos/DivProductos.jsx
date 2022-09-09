import React from 'react'
import Producto from '../Producto/Producto'
import ProdImg from './ilustraciones.jpg'

export default function DivProductos() {
  return (
    <section>
      <h2 className='sectionTitle my-2 ps-4'>Ilustraciones</h2>
      <div className="contProductos d-flex flex-row flex-wrap justify-content-evenly align-content-center p-4">
          <Producto prodName="Ilustración 1" imgSrc={ProdImg}/>
          <Producto prodName="Ilustración 2" imgSrc={ProdImg}/>
          <Producto prodName="Ilustración 3" imgSrc={ProdImg}/>
          <Producto prodName="Ilustración 4" imgSrc={ProdImg}/>
          <Producto prodName="Ilustración 5" imgSrc={ProdImg}/>
          <Producto prodName="Ilustración 6" imgSrc={ProdImg}/>
          <Producto prodName="Ilustración 7" imgSrc={ProdImg}/>
          <Producto prodName="Ilustración 8" imgSrc={ProdImg}/>
          <Producto prodName="Ilustración 9" imgSrc={ProdImg}/>
      </div>
    </section>
  )
}
