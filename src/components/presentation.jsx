import { React } from 'react';
import { useParams } from "react-router-dom";
import {locations} from "../components/locations";
import "../styles/presentation.css";

export default function AppartPresentation(){
    let {id} = useParams()
    const apparts = locations.getOneAppartment(id)

    return(

        <><div className='presentation_section'>
            <h1 className='presentation-police-title'>{apparts.title}</h1>
            <h2 className='presentation-police-title_2'>{apparts.location}</h2>
        </div><div className='tag-form'>
                <p className='tag-police'>{apparts.tags}</p>
            </div></>

    )
}