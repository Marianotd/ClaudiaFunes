import React from 'react'
// Router
import { Link } from 'react-router-dom'

export default function NavLink({name, img, classTxt, classImg, link, classLink, targetLink, setOpen}) {
  function handleClick(){
    setOpen(false)
  }
  
  return (
    <Link className={classLink} to={link} target={targetLink} onClick={handleClick}>
        <img className={classImg} src={img} alt={name}/>
        <p className={classTxt}>{name}</p>
    </Link>
  )
}