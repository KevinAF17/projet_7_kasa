import { React } from 'react';
import { useParams } from 'react-router-dom';
import Star from '../Images/Star.png';
import EmptyStar from '../Images/EmptyStar.png'
import "../styles/presentation.css";
import apparts from '../logements.json';

export default function AppartPresentation(){
    const{id} = useParams()
    const lodging = apparts.find((lodging) => lodging.id === id)
    const stars = [1,2,3,4,5]
    const ratings = lodging.rating
    const tag = lodging.tags

    return(
        <>
            <div className='presentation_part'>
                    <div className='presentation_section'>
                        <h1 className='presentation-police-title'>{lodging.title}</h1>
                        <h2 className='presentation-police-title_2'>{lodging.location}</h2>
                        <div className='furtherDetails'>                           
                            <div className='tag-section'>
                                {tag.map((tagsNb) => (
                                    <div className="tag-form" key={tagsNb+lodging.id}>
                                       <p className="tag-police">{tagsNb}</p> 
                                    </div>
                                ))}
                            </div>
                                <div className='starContainer'>
                                    {stars.map((star) =>
                                            ratings >= star ? (
                                                <img src={Star} alt="Etoile pleine" className='star' class="star"key={lodging.id}/>
                                            ) : (
                                                <img src={EmptyStar} alt="Etoile vide" className='star' class="star" key={lodging.id}/>  
                                            )                
                                        )}
                                </div>
                        </div>
                    </div>
                    <div className='presentation_host'>
                        <p className='presentation_name'>{lodging.host.name}</p>
                        <img src={lodging.host.picture} className='host_img' alt="proprio" key={lodging.id}/>
                    </div>
            </div>
        </>
    )
}