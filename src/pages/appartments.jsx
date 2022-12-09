import React from "react";
import { useParams } from 'react-router-dom';
import '../styles/homepage.css';
import '../styles/d_e.css';
import Error from '../pages/404notFound';
import Header from "../components/header";
import Carousel from "../components/carousel";
import Presentation from "../components/presentation";
import Description from "../components/description";
import Equipment from "../components/equipments";
import Footer from "../components/footer";
import apparts from '../logements.json';

export default function AppartLocation() {
    const{id} = useParams()
    const lodging = apparts.find((lodging) => lodging.id === id)
    if (!lodging){
        return <Error/>
    }
    else {
    return (
        <div className="home">  
            <Header />
            <Carousel/>
            <Presentation />
            <div className="inlines"><Description /> <Equipment /></div>
            <Footer/>
        </div>
    )
}
}
