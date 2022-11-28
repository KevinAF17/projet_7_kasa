import '../styles/description.css';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import Arrow from '../Images/Arrow.png';
import Arrow2 from '../Images/ArrowTop.png';
import {locations} from "../components/locations";


export default function Equipment(){

    let {id} = useParams()
    const apparts = locations.getOneAppartment(id)
    
    const [dropped, open]= useState(false)
    
    return dropped ? (
        <div className='description-title' onClick={() => open(false)}> 
                <p className='description-titlePolice'> Description <button className='description-button'> <img src={Arrow} className='description-hideAndshow-Arrow' alt='Flèche' /> </button> </p>
            </div>
    ) : (
        <div className='description-title' onClick={() => open(true)}>
                <p className='description-titlePolice'> Description <button className='description-button'> <img src={Arrow2} className='description-hideAndshow-Arrow' alt='Flèche' /> </button> </p> 
                 <div className='description-police'>{apparts.description}</div>
            </div>
    )   
}