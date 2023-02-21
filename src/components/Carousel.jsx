import React from 'react';
import Slider from 'infinite-react-carousel';
import './carousel.css';
import Typed from 'typed.js';
import { useRef } from 'react';
import { useEffect } from 'react';

    const Carousel = ({images}) => {

        const el = useRef(null);

        useEffect(() => {
            const typed = new Typed(el.current, {
                strings: ["NISSIAPP"],
                autoplay: true,
                autoplaySpeed: 3000,
                startDelay: 300,
                typeSpeed: 200,
                backDelay: 800,
                backSpeed: 200,
                smartBackspace: true,
                showCursor: false,
                loop: true,
            })
        })
        
        const settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            className: "slider__content",
            dots: true,
            virtualList: true,
            duration: 3,
            arrows:true,
          };

        return <section className='slider'>

            <Slider className="slider__content">
                {
                    images.map(image =><div key={image.id} className='slider__content--item'>
                            <img src={image.image} alt={image.title} />
                        </div>)
                }
            </Slider>
                            {/* <div className='slider-description'>
                                <h2>BIENVENIDOS A.<span>&#160;</span></h2>
                            </div>
                            <div className='slider-description slider-descripcion2'>
                                <h2>NISSIAPP.<span>&#160;</span></h2>
                            </div> */}       
                            <div className='maquina'>
                                <h2 className='welcome'>Bienvenidos A</h2>
                            </div>       
                            <div className="maquina maquina2">
                                <p className='texto'><span ref={el}></span></p>
                            </div>
        </section>
    }
    
export default Carousel