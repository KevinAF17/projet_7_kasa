import '../styles/about-page.css';
import Arrow from '../Images/Arrow.png';

export default function DescriptionDrop(){
    return(
        <div className='aboutPage-container'>
            <div className='aboutPage-title'> 
                <p className='aboutPage-titlePolice'> Fiabilité </p> 
                 <button className='aboutPage-button'> <img src={Arrow} className='aboutPage-hideAndshow-Arrow' alt='Flèche' /> </button>
            </div> 

            <div className='aboutPage-title'> 
                <p className='aboutPage-titlePolice'> Respect </p> 
                 <button className='aboutPage-button'> <img src={Arrow} className='aboutPage-hideAndshow-Arrow' alt='Flèche' /> </button>
            </div>

            <div className='aboutPage-title'> 
                <p className='aboutPage-titlePolice'> Service </p> 
                 <button className='aboutPage-button'> <img src={Arrow} className='aboutPage-hideAndshow-Arrow' alt='Flèche' /> </button>
            </div>

            <div className='aboutPage-title'> 
                <p className='aboutPage-titlePolice'> Responsabilité </p> 
                 <button className='aboutPage-button'> <img src={Arrow} className='aboutPage-hideAndshow-Arrow' alt='Flèche' /> </button>
            </div>
        </div>
        
    )
}