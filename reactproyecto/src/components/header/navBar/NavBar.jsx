import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Logo from '../../../media/header/Logo.png'
import ImgNav from '../../../media/header/menuNav.png'
import { CgMenu } from 'react-icons/cg';

function NavBar() {
    const [open, setOpen] = useState(false);

    return(
        <>
            <div className="d-flex flex-row flex-wrap justify-content-around align-content-center pt-4 pb-2 px-md-2">
                <div className="logoHeader d-flex flex-row flex-wrap align-content-center justify-content-center gap-2 col-5 col-md-2">
                    <img className="img img-fluid col-3" src={Logo} alt="Logo"/>
                    <h3 className="col-12 text-center m-0 p-0">Claudilla</h3>
                </div>
                <div className="botonMenuHeader col-5 d-md-none d-flex align-items-center justify-content-center">                   
                    <button type="button" onClick={() => setOpen(!open)}><CgMenu size={45}/></button>      
                </div>

                <Collapse in={open}>
                    <div className="col-12 col-md-10 d-md-flex flex-row align-items-md-center" id="navHeader">
                        <nav className="col-12 d-flex flex-row flex-wrap justify-content-evenly align-items-center">
                            <a className="col-12 col-md-2 text-center py-3 p-md-1" href="ilustraciones.html">
                                <img className="d-none d-xl-inline-block img-fluid" src={ImgNav} alt="Ilustraciones"/>
                                <p className="textNav">Ilustraciones</p>
                            </a>
                            <a className="col-12 col-md-2 text-center py-3 p-md-1" href="#">
                                <img className="d-none d-xl-inline-block img-fluid" src={ImgNav} alt="Tarot"/>
                                <p className="textNav">Tarot</p>
                            </a>
                            <a className="col-12 col-md-2 text-center py-3 p-md-1" href="#">
                                <img className="d-none d-xl-inline-block img-fluid" src={ImgNav} alt="Astrología"/>
                                <p className="textNav">Astrología</p>
                            </a>
                            <a className="col-12 col-md-2 text-center py-3 p-md-1" href="#">
                                <img className="d-none d-xl-inline-block img-fluid" src={ImgNav} alt="Cursos"/>
                                <p className="textNav">Cursos</p>
                            </a>
                            <a className="col-12 col-md-2 text-center py-3 p-md-1" href="#">
                                <img className="d-none d-xl-inline-block img-fluid" src={ImgNav} alt="Otros(Objetos)"/>
                                <p className="textNav">Otros</p>
                            </a>
                            <a className="col-12 col-md-2 text-center py-3 p-md-1" href="#">
                                <p>Contacto</p>
                            </a>
                        </nav>
                    </div>
                </Collapse>
            </div>
        </>
    )
};

export default NavBar;