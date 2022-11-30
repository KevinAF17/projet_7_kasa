import React from "react";
import '../styles/homepage.css';
import Header from "../components/header";
import Carousel from "../components/carousel";
import Presentation from "../components/presentation";
import D_E from "../components/des_equip"
import Reliability from "../components/reliability";
import Respect from "../components/respect";
import Footer from "../components/footer";

export default function AppartLocation() {
    return (
        <div>  
            <Header />
            <Carousel/>
            <Presentation />
            <D_E />
            <Reliability /> 
            <Respect />
            <Footer/>
        </div>
    )
}
