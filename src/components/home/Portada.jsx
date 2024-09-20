import React, { useState, useEffect } from 'react'
import { getUrl } from '../../services/firestore'
import { PuffLoader } from 'react-spinners';
import { MdError } from "react-icons/md";

export default function Portada() {
  const [videoUrl, setVideoUrl] = useState(null)
  const [width, setWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    const handleFile = async () => {
      setLoading(true)
      let fileRoute = (width < 768) ? 'portada/Portada--sm.mp4' : 'portada/Portada.mp4'
      try {
        let url = await getUrl(fileRoute)
        setVideoUrl(url)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    handleFile()

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 items-center">
        <PuffLoader color='#ffe7ce' size={100} />
        <p className="text-white">Cargando archivo...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex items-center justify-center text-xl md:text-2xl font-bold gap-4 flex-grow'>
        <MdError /> Archivo no encontrado
      </div>
    )
  }

  return (
    <div
      className='bg-secondary p-2 min-h-60 lg:min-h-80 flex items-center justify-center text-center'
    >
      <video
        src={videoUrl}
        className="rounded-lg"
        muted
        autoPlay
        loop
        aria-label='Video de portada'
      >
      </video>
    </div>
  )
}