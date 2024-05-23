import React from 'react'
// Iconos
import { AiOutlineUser } from 'react-icons/ai';
// Router
import { Link } from 'react-router-dom';

export default function UserWidget() {
  return (
    <Link to='/Usuario' className='navWidget col-6 col-md-12 text-center text-decoration-none py-3 p-md-1'>
        <AiOutlineUser className='navIcon'/>
    </Link>
  )
}
