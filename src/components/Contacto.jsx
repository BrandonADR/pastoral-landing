function Contacto(){
    return(
        <div className="contactanos">
            <div className="container">
                <div className="container__contact">
                    <div className="contact__title">
                        <h2><span>Inicia</span> <br/> un Proyecto</h2>
                    </div>
                    <form className="contact__form" action="">
                        <label htmlFor="name">Nombre</label>
                        <input id="name" name="nombre" type="text" />
                        <label htmlFor="email">Correo</label>
                        <input id="email" name="correo" type="email" />
                        <label htmlFor="message">Mensaje</label>
                        <textarea name="mensaje" id="message" cols="25" rows="8"></textarea>

                        <button type="submit">
                            Enviar
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"/></svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacto