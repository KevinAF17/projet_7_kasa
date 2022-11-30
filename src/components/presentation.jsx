import { React } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/presentation.css";
import apparts from '../logements.json';

export default function AppartPresentation(){
    const{id} = useParams()
    const lodging = apparts.find((lodging) => lodging.id === id)

    return(

        <><div className='presentation_section'>
            <h1 className='presentation-police-title'>{lodging.title}</h1>
            <h2 className='presentation-police-title_2'>{lodging.location}</h2>
            <div className='presentation_host'></div>
        </div><div className='tag-form'>
                <p className='tag-police'></p>
            </div></>
    )
}