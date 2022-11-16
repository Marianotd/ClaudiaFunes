import React, { useState } from 'react';
// Bootstrap
import Collapse from 'react-bootstrap/Collapse';
// Imagenes
import NavLinkImg from '../NavLink/NavLinkImg.png';
import NavTatuajes from '../NavLink/NavTatuajes.png';
// Componentes
import Logo from '../Logo/Logo';
import NavLink from '../NavLink/NavLink';
import NavIcons from '../NavIcons/NavIcons';

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return(
        <header className="header pt-4 pb-2 px-md-2">
            <Logo />

            <NavIcons setOpen={setOpen} open={open} />

            <Collapse className='mt-3' in={open}>
                <div className="collapse d-md-flex">
                    <nav>
                        <NavLink setOpen={setOpen} name="Ilustraciones" link="/Ilustraciones" img={NavLinkImg}  classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                        <NavLink setOpen={setOpen} name="Tarot"         link="/Tarot"         img={NavLinkImg}  classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                        <NavLink setOpen={setOpen} name="Astrología"    link="/Astrologia"    img={NavLinkImg}  classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                        <NavLink setOpen={setOpen} name="Cursos"        link="/Cursos"        img={NavLinkImg}  classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                        <NavLink setOpen={setOpen} name="Tatuajes"      link="/Tatuajes"      img={NavTatuajes} classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                        <NavLink setOpen={setOpen} name="Contacto"      link="/Contacto"      img=""            classTxt=""        classImg="d-none"                             classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                    </nav>
                </div>
            </Collapse>
        </header>
    )
};