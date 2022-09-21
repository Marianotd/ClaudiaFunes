import React from 'react'

export default function NavLink({name, img, classTxt, classImg, link, classLink, targetLink}) {
  return (
    <a className={classLink} href={link} target={targetLink}>
        <img className={classImg} src={img} alt={name}/>
        <p className={classTxt}>{name}</p>
    </a>
  )
}