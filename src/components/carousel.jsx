import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import '../styles/carousel.css';
import LeftArrow from '../Images/LeftArrow.png';
import RightArrow from '../Images/ArrowRight.png';
import {locations} from "./locations";

export default function Carousel(img){
    let {id} = useParams()
    const apparts = locations.getOneAppartment(id)

    const [old, next] = useState(0);

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
                <img src={apparts.pictures} alt={apparts.title} className="carousel-image" key={apparts.id} />
            </div>
            <img src={LeftArrow} className={img.length === 1 ? "carousel-slideToleftBis" : "carousel-slideToleft"} alt="flèche gauche" onClick={slideLeft} />
            <div className={img.length === 1 ? "carousel-numbersBis" : "carousel-numbers"}> {old +1}/{img.length} </div>

            <img src={RightArrow} className={img.length === 1 ? "carousel-slideTorightBis" : "carousel-slideToright"} alt="flèche droite" onClick={slideRight} />
        </section>
    )
}