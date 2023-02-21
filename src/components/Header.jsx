import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const CarouselImg = styled.img`
    width: 100%;
    height: 550px;
    opacity: 0;
    transition: 1s;
    &.loaded{
        opacity: 1;
    }
`;

/* interface Props {
    image: string[];
    autoPlay?: boolean;
    showButtons?: boolean;
} */


export default function Header(){
    const image = ["carousel1.jpg", "carousel2.jpg", "carousel3.jpg"];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(image[0]);
    const [loaded, setLoaded] = useState(false);

    /* useEffect(() => {
        if(Props.autoPlay){
            const interval = setInterval(() => {
                selectNewImage(selectedIndex, Props.image);
            }, 1000);
            return () => clearInterval(interval);
        }
    }); */

    const selectNewImage = (index, image, next=true) =>{
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? selectedIndex < image.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : image.length - 1;
            setSelectedImage(image[nextIndex]);
            setSelectedIndex(nextIndex);
        },500);

    };

    const previos = () => {
        selectNewImage(selectedIndex, image, false);
    };

    const next = () => {
        selectNewImage(selectedIndex, image);
    };

    /* const previous = () => {
        const condition = selectedIndex > 0;
        const nextIndex = condition ? selectedIndex - 1 : image.length -1;
        setSelectedImage[image[nextIndex]];
        setSelectedIndex(nextIndex);
    }

    const nextIndex = () => {
        const condition = selectedIndex < image.length;
        const nextIndex = condition ? selectedIndex + 1 : 0;
        setSelectedImage[image[nextIndex]];
        setSelectedIndex(nextIndex);
    } */
    return (
        <div className="carousel-img">
            <CarouselImg src={`src/assets/${selectedImage}`} alt="Imagen de ejemplo" className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)} />
            <button className="btn-right" onClick={previos}>{"<"}</button>
            <button className="btn-left" onClick={next}>{">"}</button>
        </div>
    );
}