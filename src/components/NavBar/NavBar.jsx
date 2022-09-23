/* Import Bootstrap */
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
/* Import Iconos - Logo */
import { CgMenu } from 'react-icons/cg';
import Logo from '../Logo/Logo';
/* Import Componentes */
import NavLink from '../NavLink/NavLink';
import NavLinkCarrito from '../NavLinkCarrito/NavLinkCarrito';
/* Import Imagenes */
import NavLinkImg from '../NavLink/NavLinkImg.png';
import NavTatuajes from '../NavLink/NavTatuajes.png';

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return(
        <header>
            <div className="d-flex flex-row flex-wrap justify-content-around align-content-center pt-4 pb-2 px-md-2">
                <Logo />

                <div className="menuHeader order-md-2 col-5 col-md-1 d-flex align-items-center justify-content-around justify-content-md-center">                   
                    <button className='d-md-none' type="button" onClick={() => setOpen(!open)}><CgMenu className='menuHamburguesa'/></button>      
                    <NavLinkCarrito/>
                </div>

                <Collapse className='mt-3' in={open}>
                    <div className="collapse col-12 col-md-9 d-md-flex flex-row align-items-md-center">
                        <nav className="col-12 d-flex flex-row flex-wrap justify-content-evenly align-items-center">
                            <NavLink name="Ilustraciones" link="/" img={NavLinkImg}  classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                            <NavLink name="Tarot"         link="/tarot"         img={NavLinkImg}  classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                            <NavLink name="Astrología"    link="/astrologia"    img={NavLinkImg}  classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                            <NavLink name="Cursos"        link="/cursos"        img={NavLinkImg}  classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                            <NavLink name="Tatuajes"      link="/tatuajes"      img={NavTatuajes} classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                            <NavLink name="Contacto"      link="/contacto"      img=""            classTxt=""        classImg="d-none"                             classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                        </nav>
                    </div>
                </Collapse>
            </div>
        </header>
    )
};