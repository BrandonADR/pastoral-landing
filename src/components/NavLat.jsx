import {Link} from 'react-scroll'

function NavLat(){
    return(
        <div className="nav nav-lat">
            <div className="logo">
                <div className="">
                    <svg id="menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
                </div>
                <h1>NISSIAPP</h1>
                <div className="close" id="close-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="close" d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/></svg>
                </div>
            </div>
            <div className="enlaces">
                <Link to="nosotros" spy={true} smooth={true} offset={-100} duration={500} className="enlace">
                    <h3>Nosotros</h3>
                </Link>
                <Link to="areas" spy={true} smooth={true} offset={-100} duration={500} className="enlace" href="#areas">
                    <h3>Áreas</h3>
                </Link>
                <Link to="tecnologias" spy={true} smooth={true} offset={-100} duration={500} className="enlace">
                    <h3>Tecnologías</h3>
                </Link>
                <Link to="proyectos" spy={true} smooth={true} offset={-100} duration={500} className="enlace" href="#proyectos">
                    <h3>Proyectos</h3>
                </Link>
                <Link to="team" spy={true} smooth={true} offset={-100} duration={500} className="enlace" href="#team">
                    <h3>Equipo</h3>
                </Link>
                <Link to="ubicanos" spy={true} smooth={true} offset={-200} duration={500} className="enlace" href="#ubicanos">
                    <h3>Ubicanos</h3>
                </Link>
            </div>
        </div>
    );
}

export default NavLat