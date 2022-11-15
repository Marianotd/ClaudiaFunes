import React from 'react'
import { useState } from 'react'
import { getImageIndex } from '../services/firestore'

export default function Prueba() {
    const [imgUrl, setImgUrl] = useState()

    getImageIndex()
    .then(url => {
        setImgUrl(url)
        console.log(imgUrl)
    }) 

    
    

  return (
    <div className='videoPortada'>
        
    </div>
  )
}
