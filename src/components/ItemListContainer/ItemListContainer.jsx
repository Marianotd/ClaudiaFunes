import React from 'react'
import ItemList from '../ItemList/ItemList'


export default function ItemListContainer() {
  let tit = "Novedades"

  return (
    <section>
      <h2 className='sectionTitle mt-4 ps-4'>{tit}</h2>
      <div className="itemListContainer d-flex flex-row flex-wrap justify-content-evenly align-content-center p-4">
        <ItemList/>
      </div> 
    </section>
  )
}