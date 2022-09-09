import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { CgMenu } from 'react-icons/cg';
import Logo from '../Logo/Logo';
import NavLink from '../NavLink/NavLink';
import NavLinkImg from '../NavLink/NavLinkImg.png'
import NavLinkCarrito from '../NavLinkCarrito/NavLinkCarrito';

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return(
        <>
            <header>
                <div className="d-flex flex-row flex-wrap justify-content-around align-content-center pt-4 pb-2 px-md-2">
                    <Logo />

                    <div className="botonMenuHeader order-md-2 col-5 col-md-1 d-flex align-items-center justify-content-around justify-content-md-center">                   
                        <button className='d-md-none' type="button" onClick={() => setOpen(!open)}><CgMenu className='menuHamburguesa'/></button>      
                        <NavLinkCarrito/>
                    </div>

                    <Collapse className='collapseNav' in={open}>
                        <div className="collapse col-12 col-md-9 d-md-flex flex-row align-items-md-center" id="navHeader">
                            <nav className="col-12 d-flex flex-row flex-wrap justify-content-evenly align-items-center">
                                <NavLink text="Ilustraciones" img={NavLinkImg} classTxt="textNav" classImg="d-none d-xl-inline-block  img-fluid"/>
                                <NavLink text="Tarot" img={NavLinkImg} classTxt="textNav" classImg="d-none d-xl-inline-block  img-fluid"/>
                                <NavLink text="Astrología" img={NavLinkImg} classTxt="textNav" classImg="d-none d-xl-inline-block  img-fluid"/>
                                <NavLink text="Cursos" img={NavLinkImg} classTxt="textNav" classImg="d-none d-xl-inline-block  img-fluid"/>
                                <NavLink text="Otros" img={NavLinkImg} classTxt="textNav" classImg="d-none d-xl-inline-block  img-fluid"/>
                                <NavLink text="Contacto" img="" classTxt="" classImg="d-none"/>
                            </nav>
                        </div>
                    </Collapse>
                </div>
            </header>
        </>
    )
};