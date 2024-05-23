import React from 'react'
// Router
import { Link } from 'react-router-dom'

export default function Item({ id, name, img, category, slide}) {
  const urlDetail = `/Productos/${category}/${id}`
  let imgArray = Array.isArray(img)

  return (
    <div className={`${slide} item gap-2 pb-3 mb-4`}>
      { imgArray
          ? <img src={img[0]} className="itemImg img-fluid" alt={name}/>
          : <img src={img} className="itemImg img-fluid" alt={name}/>
      }
      <h5>{name}</h5>
      <Link to={urlDetail} className='itemButton py-1'>Ver más</Link>
    </div> 
  )
}
