import '../styles/equipments.css';
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
        <div className='equipments-title' onClick={() => open(false)}> 
                <p className='equipments-titlePolice'> Equipements <button className='equipments-button'> <img src={Arrow} className='equipments-hideAndshow-Arrow' alt='Flèche' /> </button> </p>
            </div>
    ) : (
        <div className='equipments-title' onClick={() => open(true)}>
                <p className='equipments-titlePolice'> Equipements <button className='equipments-button'> <img src={Arrow2} className='equipments-hideAndshow-Arrow' alt='Flèche' /> </button> </p> 
                 <div className='equipments-police'>{apparts.equipments}</div>
            </div>
    )   
}
