import '../styles/equipments.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Arrow from '../Images/Arrow.png';
import Arrow2 from '../Images/ArrowTop.png';
import apparts from '../logements.json';


export default function Equipment(){
    const{id} = useParams()
    const lodging = apparts.find((lodging) => lodging.id === id)
    const equip = lodging.equipments;

    const [dropped, open]= useState(false)
    
    return dropped ? (
        <div className='equipment-section'>
        <div className='equipments-container' onClick={() => open(false)}> 
                <p className='equipments-title'> Equipements 
                <button className='equipments-button'> <img src={Arrow} className='equipments-hideAndshow-Arrow' alt='Flèche' /> </button>
                </p>
            </div>
        </div>
    ) : (
        <div className='equipment-section'>
        <div className='equipments-container' onClick={() => open(true)}>
                <p className='equipments-title'> Equipements
                <button className='equipments-button'> <img src={Arrow2} className='equipments-hideAndshow-Arrow' alt='Flèche' /> </button>
                </p> 
                 <div className='equipments-section'>
                 {equip.map((equipNb) => (
                        <p key={equipNb+lodging.id} className="equipments-content">{equipNb}</p> 
                    ))}
                 </div>
            </div>
        </div>
    )   
}
