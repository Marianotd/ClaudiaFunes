import React from 'react'
import NavLink from '../NavLink/NavLink'
import Logo from '../Logo/Logo'

export default function Footer() {
  return (
        <footer> 
        <div className="divFooter d-flex flex-row flex-wrap align-items-center justify-content-around justify-content-xl-evenly text-center p-4 gap-2">
            <div className='col-12 mb-4'>
                <Logo/>
            </div>
            

            <div className="d-flex flex-column gap-2">
                <h5 className="mb-3">Redes sociales</h5>
                <NavLink name="Instagram" link="https://www.instagram.com/"        classImg="d-none" targetLink="_blank"/>
                <NavLink name="Facebook"  link="https://es-la.facebook.com/"       classImg="d-none" targetLink="_blank"/>
                <NavLink name="Twitter"   link="https://twitter.com/?lang=es"      classImg="d-none" targetLink="_blank"/>
                <NavLink name="Pinterest" link="https://ar.pinterest.com/"         classImg="d-none" targetLink="_blank"/>
                <NavLink name="Whatsapp"  link="https://www.whatsapp.com/?lang=es" classImg="d-none" targetLink="_blank"/>
            </div>

            <div className="d-flex flex-column gap-2">
                <h5 className="mb-3">Categorias</h5>
                <NavLink name="Ilustraciones" link="/Ilustraciones" classImg="d-none" targetLink="_blank"/>
                <NavLink name="Tarot"         link="/Tarot"         classImg="d-none" targetLink="_blank"/>
                <NavLink name="Astrología"    link="/Astrologia"    classImg="d-none" targetLink="_blank"/>
                <NavLink name="Cursos"        link="/Cursos"        classImg="d-none" targetLink="_blank"/>
                <NavLink name="Tatuajes"      link="/Tatuajes"      classImg="d-none" targetLink="_blank"/>
            </div>

            <div className="d-flex flex-column gap-2">
                <h5 className="mb-3">Mi usuario</h5>
                <NavLink name="Mi cuenta"     link="/cuenta" classImg="d-none" targetLink=""/>
                <NavLink name="Mis pedidos"   link="/cuenta/pedidos" classImg="d-none" targetLink=""/>
                <NavLink name="Mis cursos"    link="/cuenta/miscursos" classImg="d-none" targetLink=""/>
                <NavLink name="Contacto"      link="/contacto" classImg="d-none" targetLink=""/>
                <NavLink name="Cerrar sesión" link="/" classImg="d-none" targetLink=""/>
            </div>
        </div>
    </footer>
  )
}
