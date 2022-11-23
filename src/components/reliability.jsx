import '../styles/about-page.css';
import { useState } from 'react';
import Arrow from '../Images/Arrow.png';
import Arrow2 from '../Images/ArrowTop.png';

export default function ReliabilityDrop(){
    
    const [dropped, open]= useState(false)
    
    return dropped ? (
        <div className='aboutPage-title' onClick={() => open(false)}> 
                <p className='aboutPage-titlePolice'> Fiabilité <button className='aboutPage-button'> <img src={Arrow} className='aboutPage-hideAndshow-Arrow' alt='Flèche' /> </button> 
                </p>
            </div>
    ) : (
        <div className='aboutPage-title' onClick={() => open(true)}> 
                <p className='aboutPage-titlePolice'> Fiabilité <button className='aboutPage-button'> <img src={Arrow2} className='aboutPage-hideAndshow-Arrow' alt='Flèche' /> </button>  </p> 
                 <div className='aboutPage-police'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>
            </div>
    )   
}