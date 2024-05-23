import React from 'react'
// Componentes
import NavLink from '../NavLink/NavLink'

export default function Footer() {
    function closeSession(){
        console.log('Has cerrado sesión')
    }
  return (
        <footer className="divFooter p-4"> 


            <div className="linkGroup">
                <h5 className="mb-2">Redes sociales</h5>
                <NavLink name="Instagram" link="https://www.instagram.com/"        classImg="d-none" targetLink="_blank"/>
                <NavLink name="Facebook"  link="https://es-la.facebook.com/"       classImg="d-none" targetLink="_blank"/>
                <NavLink name="Twitter"   link="https://twitter.com/?lang=es"      classImg="d-none" targetLink="_blank"/>
                <NavLink name="Pinterest" link="https://ar.pinterest.com/"         classImg="d-none" targetLink="_blank"/>
                <a href="https://api.whatsapp.com/send/?phone=5492612483644&text&type=phone_number&app_absent=0" target='_blank'>Whatsapp</a>
            </div>

            <div className="linkGroup">
                <h5 className="mb-2">Categorias</h5>
                <NavLink name="Ilustraciones" link="/Productos/Ilustraciones" classImg="d-none"/>
                <NavLink name="Tarot"         link="/Productos/Tarot"         classImg="d-none"/>
                <NavLink name="Astrología"    link="/Productos/Astrologia"    classImg="d-none"/>
                <NavLink name="Cursos"        link="/Productos/Cursos"        classImg="d-none"/>
                <NavLink name="Tatuajes"      link="/Productos/Tatuajes"      classImg="d-none"/>
            </div>

            <div className="linkGroup">
                <h5 className="mb-2">Mi usuario</h5>
                <NavLink name="Mi cuenta"     link="/Cuenta"           classImg="d-none"/>
                <NavLink name="Mis pedidos"   link="/Cuenta/Pedidos"   classImg="d-none"/>
                <NavLink name="Mis cursos"    link="/Cuenta/MisCursos" classImg="d-none"/>
                <NavLink name="Contacto"      link="/Contacto"         classImg="d-none"/>
                <NavLink name="Cerrar sesión" link="/"                 classImg="d-none"/>
            </div>
        </footer>
  )
}
