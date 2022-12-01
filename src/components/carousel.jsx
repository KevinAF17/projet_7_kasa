import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/carousel.css';
import LeftArrow from '../Images/LeftArrow.png';
import RightArrow from '../Images/ArrowRight.png';
import apparts from '../logements.json';


export default function Carousel(){ 

    const{id} = useParams()
    const lodging = apparts.find((lodging) => lodging.id === id)

    const [old, next] = useState(0);

    const img = lodging.pictures
    const length = img.length;

    const slideRight = () => {
        next(old === length -1 ? 0 : old +1)
    }

    const slideLeft = () => {
        next(old === 0 ? length -1 : old -1)
    }

    return (
        <section className="carousel-container">
            <div className="carousel-sliders">
                    <img src={img[old]} alt={lodging.title} className="carousel-image" key={lodging.id} />
                <div className={img.length === 1 ? "carousel-numbersBis" : "carousel-numbers"}> {old +1}/{img.length} </div>
                <img src={LeftArrow} className={img.length === 1 ? "carousel-slideToleftBis" : "carousel-slideToleft"} alt="flèche gauche" onClick={slideLeft} />
                <img src={RightArrow} className={img.length === 1 ? "carousel-slideTorightBis" : "carousel-slideToright"} alt="flèche droite" onClick={slideRight} />
            </div>
           
        </section>
    )
}