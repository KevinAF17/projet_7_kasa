import '../styles/description.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Arrow from '../Images/Arrow.png';
import Arrow2 from '../Images/ArrowTop.png';
import apparts from '../logements.json';


export default function Equipment(){

    const{id} = useParams()
    const lodging = apparts.find((lodging) => lodging.id === id)
    
    const [dropped, open]= useState(false)
    
    return dropped ? (
        <div className='description-title' onClick={() => open(false)}> 
                <p className='description-titlePolice'> Description <button className='description-button'> <img src={Arrow} className='description-hideAndshow-Arrow' alt='Flèche' /> </button> </p>
            </div>
    ) : (
        <div className='description-title' onClick={() => open(true)}>
                <p className='description-titlePolice'> Description <button className='description-button'> <img src={Arrow2} className='description-hideAndshow-Arrow' alt='Flèche' /> </button> </p> 
                 <div className='description-police'>{lodging.description}</div>
            </div>
    )   
}