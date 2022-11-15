import React, { useState } from 'react'
import { getUrl } from '../../services/firestore'

export default function Portada() {
    const [videoUrl, setVideoUrl] = useState()
    let archivo = 'portada/Portada.mp4'

    getUrl(archivo)
    .then(url => {
        setVideoUrl(url)
    }) 

  return (
    <section>
        <div>
            <video src={videoUrl} className="portada" muted autoPlay loop></video>
        </div>
    </section>
  )
}