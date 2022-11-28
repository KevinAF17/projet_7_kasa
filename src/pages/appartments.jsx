import React from "react";
import '../styles/d_e.css';
import Header from "../components/header";
import Carousel from "../components/carousel";
import Presentation from "../components/presentation";
import Description from "../components/description"
import Equipment from "../components/equipments";
import Reliability from "../components/reliability";
import Respect from "../components/respect";
import Footer from "../components/footer";

export default function AppartLocation() {


    return (
        <div className= 'home'>  
            <Header />
            <Carousel />
            <Presentation />
            <div className= 'inlines'>
            <Description />
            <Equipment />
            </div>
            <Reliability /> 
            <Respect />
            <Footer/>
        </div>
    )
}
