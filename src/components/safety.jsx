import '../styles/about-page.css';
import { useState } from 'react';
import Arrow from '../Images/Arrow.png';
import Arrow2 from '../Images/ArrowTop.png';

export default function ReliabilityDrop(){
    
    const [dropped, open]= useState(false)
    
    return dropped ? (
        <div className='aboutPage-title' onClick={() => open(false)}> 
                <p className='aboutPage-titlePolice'> Sécurité <button className='aboutPage-button'> <img src={Arrow} className='aboutPage-hideAndshow-Arrow' alt='Flèche' /> </button> </p>
            </div>
    ) : (
        <div className='aboutPage-title' onClick={() => open(true)}> 
                <p className='aboutPage-titlePolice'> Sécurité <button className='aboutPage-button'> <img src={Arrow2} className='aboutPage-hideAndshow-Arrow' alt='Flèche' /> </button> </p> 
                 <div className='aboutPage-police'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.</div>
            </div>
    )   
}