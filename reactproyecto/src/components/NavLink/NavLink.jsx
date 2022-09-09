import React from 'react'

function NavLink({text, img, classTxt, classImg}) {
  return (
    <a className="col-12 col-md-2 text-center py-3 p-md-1" href={`${text}.html`}>
        <img className={classImg} src={img} alt={text}/>
        <p className={classTxt}>{text}</p>
    </a>
  )
}

export default NavLink