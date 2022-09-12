import React from 'react'
import LogoImg from './Logo.png'

export default function Footer() {
  return (
        <footer> 
        <div className="divFooter d-flex flex-row flex-wrap align-items-center justify-content-around justify-content-xl-evenly text-center p-4 gap-2">
            <div className="col-12 mb-4">
                <img src={LogoImg} className="img img-fluid col-2 col-md-1" alt="Logo"/>
            </div>

            <div className="d-flex flex-column gap-2">
                <h5 className="mb-3">Redes sociales</h5>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Pinterest</a>
                <a href="#">Whatsapp</a>
            </div>

            <div className="d-flex flex-column gap-2">
                <h5 className="mb-3">Categorias</h5>
                <a href="ilustraciones.html">Ilustraciones</a>
                <a href="#">Tarot</a>
                <a href="#">Astrología</a>
                <a href="#">Cursos</a>
                <a href="#">Otros</a>
            </div>

            <div className="d-flex flex-column gap-2">
                <h5 className="mb-3">Mi usuario</h5>
                <a href="#">Mi cuenta</a>
                <a href="#">Mis pedidos</a>
                <a href="#">Mis cursos </a>
                <a href="#">Contacto</a>
                <a href="#">Cerrar sesión</a>
            </div>
        </div>
    </footer>
  )
}
