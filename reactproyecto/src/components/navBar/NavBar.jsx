import "./navBar.css";

function NavBar() {
    return(
        <nav className="contNavBar col-12 d-flex flex-row flex-wrap justify-content-evenly align-items-center">
            <a className="col-12 col-md-2 text-center py-3 p-md-1" href="ilustraciones.html">
                <p className="textNav">Ilustraciones</p>
            </a>
            <a className="col-12 col-md-2 text-center py-3 p-md-1" href="#">
                <p className="textNav">Tarot</p>
            </a>
            <a className="col-12 col-md-2 text-center py-3 p-md-1" href="#">
                <p className="textNav">Astrología</p>
            </a>
            <a className="col-12 col-md-2 text-center py-3 p-md-1" href="#">
                <p className="textNav">Cursos</p>
            </a>
            <a className="col-12 col-md-2 text-center py-3 p-md-1" href="#">
                <p className="textNav">Otros</p>
            </a>
            <a className="col-12 col-md-2 text-center py-3 p-md-1" href="#">
                <p>Contacto</p>
            </a>
        </nav>
    )
};

export default NavBar;