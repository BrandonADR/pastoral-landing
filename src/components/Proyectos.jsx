function Proyectos(){
    return(
        <div id="proyectos" className="proyectos">
            <div className="container">
                <div className="proyectos-top">
                    <h2>Proyectos</h2>
                    <a href="#">
                        ver todos
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"/></svg>
                    </a>
                </div>
                <div className="proyectos-down">
                    <div className="proyecto">
                        <div className="proyecto-image">
                            {/* <img src="src/assets/proyecto1.jpg" alt="" /> */}
                            <img src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className="proyecto-info">
                            <h3>Sitio web de tours</h3>
                            <a href="#">ver</a>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div className="proyecto-image">
                            {/* <img src="src/assets/proyecto2.jpg" alt="" /> */}
                            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className="proyecto-info">
                            <h3>Sitio web de tours</h3>
                            <a href="#">ver</a>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div className="proyecto-image">
                            {/* <img src="src/assets/proyecto3.jpg" alt="" /> */}
                            <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className="proyecto-info">
                            <h3>Sitio web de tours</h3>
                            <a href="#">ver</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyectos