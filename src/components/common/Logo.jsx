import React from 'react'
// Router
import { Link } from 'react-router-dom'

export default function Logo() {
  const title = "La Proporción Aurea"

  return (
    <Link to='/' className='text-textMain font-bold text-2xl'>
      {title}
    </Link>
  )
}