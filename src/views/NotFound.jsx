import React from 'react'
import { MdError } from "react-icons/md";

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4 text-8xl'>
      <MdError />
      <h1 className='titleSection'>Ups.! Sitio no encontrado</h1>
    </div>
  )
}
