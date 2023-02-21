import { useState } from "react"

function Areas(){
    const [areas, setAreas] = useState([]);
    
    return(
        <div id="areas" className="section-areas">
            <div className="container">
                <div className="title">
                    <h2>Areas</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eos sint possimus velit exercitationem, modi ad voluptatum magni blanditiis assumenda id ut itaque, unde architecto quam quidem accusamus nemo qui!</p>
                </div>
                <div className="areas">
                    <div className="area">
                        <div className="area-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"/></svg>
                        </div>
                        <div className="area-text">
                            <p>Desarrollo de API's</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
                        </div>
                    </div>
                    <div className="area">
                        <div className="area-image area-image__2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M20 17.722c.595-.347 1-.985 1-1.722V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v11c0 .736.405 1.375 1 1.722V18H2v2h20v-2h-2v-.278zM5 16V5h14l.002 11H5z"/></svg>
                        </div>
                        <div className="area-text">
                            <p>Desarrollo de API's</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
                        </div>
                    </div>
                    <div className="area">
                        <div className="area-image area-image__3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"/></svg>
                        </div>
                        <div className="area-text">
                            <p>Desarrollo de API's</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
                        </div>
                    </div>
                    <div className="area">
                        <div className="area-image area-image__4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"/></svg>
                        </div>
                        <div className="area-text">
                            <p>Desarrollo de API's</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
                        </div>
                    </div>
                    <div className="area">
                        <div className="area-image area-image__5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M8 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0-6c1.178 0 2 .822 2 2s-.822 2-2 2-2-.822-2-2 .822-2 2-2zm1 7H7c-2.757 0-5 2.243-5 5v1h2v-1c0-1.654 1.346-3 3-3h2c1.654 0 3 1.346 3 3v1h2v-1c0-2.757-2.243-5-5-5zm9.364-10.364L16.95 4.05C18.271 5.373 19 7.131 19 9s-.729 3.627-2.05 4.95l1.414 1.414C20.064 13.663 21 11.403 21 9s-.936-4.663-2.636-6.364z"/><path d="M15.535 5.464 14.121 6.88C14.688 7.445 15 8.198 15 9s-.312 1.555-.879 2.12l1.414 1.416C16.479 11.592 17 10.337 17 9s-.521-2.592-1.465-3.536z"/></svg>
                        </div>
                        <div className="area-text">
                            <p>Desarrollo de API's</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Areas