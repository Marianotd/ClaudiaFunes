import React from 'react'
// Componentes
// import NavLink from '../NavLink/NavLink'
import Logo from '../common/Logo'

export default function Footer() {
  return (
        <footer className="divFooter p-4"> 
            <div className='col-12'>
                <Logo classFooter={'logo--footer'}/>
            </div>

            {/* <div className="linkGroup">
                <h5 className="mb-2">Redes sociales</h5>
                <NavLink name="Instagram" link="https://www.instagram.com/"        classImg="d-none" targetLink="_blank"/>
                <NavLink name="Facebook"  link="https://es-la.facebook.com/"       classImg="d-none" targetLink="_blank"/>
                <NavLink name="Twitter"   link="https://twitter.com/?lang=es"      classImg="d-none" targetLink="_blank"/>
                <NavLink name="Pinterest" link="https://ar.pinterest.com/"         classImg="d-none" targetLink="_blank"/>
                <a href="https://api.whatsapp.com/send/?phone=5492612483644&text&type=phone_number&app_absent=0" target='_blank'>Whatsapp</a>
            </div>

            <div className="linkGroup">
                <h5 className="mb-2">Categorias</h5>
                <NavLink name="Ilustraciones" link="/Ilustraciones" classImg="d-none"/>
                <NavLink name="Tarot"         link="/Tarot"         classImg="d-none"/>
                <NavLink name="Astrología"    link="/Astrologia"    classImg="d-none"/>
                <NavLink name="Cursos"        link="/Cursos"        classImg="d-none"/>
                <NavLink name="Tatuajes"      link="/Tatuajes"      classImg="d-none"/>
            </div>

            <div className="linkGroup">
                <h5 className="mb-2">Mi usuario</h5>
                <NavLink name="Mi cuenta"     link="/cuenta"           classImg="d-none"/>
                <NavLink name="Mis pedidos"   link="/cuenta/pedidos"   classImg="d-none"/>
                <NavLink name="Mis cursos"    link="/cuenta/miscursos" classImg="d-none"/>
                <NavLink name="Contacto"      link="/contacto"         classImg="d-none"/>
                <NavLink name="Cerrar sesión" link="/"                 classImg="d-none"/>
            </div> */}
        </footer>
  )
}
