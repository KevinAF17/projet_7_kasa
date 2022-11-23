import '../styles/about-page.css';
import { useState } from 'react';
import Arrow from '../Images/Arrow.png';
import Arrow2 from '../Images/ArrowTop.png';

export default function ReliabilityDrop(){
    
    const [dropped, open]= useState(false)
    
    return dropped ? (
        <div className='aboutPage-title' onClick={() => open(false)}> 
                <p className='aboutPage-titlePolice'> Service <button className='aboutPage-button'> <img src={Arrow} className='aboutPage-hideAndshow-Arrow' alt='Flèche' /> </button> </p>
                 
            </div>
    ) : (
        <div className='aboutPage-title' onClick={() => open(true)}> 
                <p className='aboutPage-titlePolice'> Service </p> 
                 <button className='aboutPage-button'> <img src={Arrow2} className='aboutPage-hideAndshow-Arrow' alt='Flèche' /> </button>
                 <div className='aboutPage-police'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N’hésitez pas à nous contacter si vous avez la moindre question.</div>
            </div>
    )   
}