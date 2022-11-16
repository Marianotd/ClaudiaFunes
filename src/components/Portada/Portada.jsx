import React, { useState, useEffect } from 'react'
import { getUrl } from '../../services/firestore'

export default function Portada() {
    const [videoUrl, setVideoUrl] = useState()
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [width]);

    let archivo = ''
    
    if(width < 768){
      archivo = 'portada/Portada--sm.mp4'
    } else {
      archivo = 'portada/Portada.mp4'
    }
    
    const handleResize = () => {
      setWidth(window.innerWidth);
    };


    getUrl(archivo)
    .then(url => {
        setVideoUrl(url)
    }) 

  return (
    <picture>
          <source srcSet={videoUrl} media="(min-width: 768px)"/>
          <video src={`${videoUrl}--sm`} className="portada" muted autoPlay loop></video>
    </picture>
  )
}