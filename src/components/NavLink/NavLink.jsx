import React from 'react'
/* Router */
import { Link } from 'react-router-dom'

export default function NavLink({name, img, classTxt, classImg, link, classLink, targetLink}) {
  return (
    <Link className={classLink} to={link} target={targetLink}>
        <img className={classImg} src={img} alt={name}/>
        <p className={classTxt}>{name}</p>
    </Link>
  )
}