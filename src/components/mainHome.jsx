import '../styles/mainHome.css';
import { Link } from 'react-router-dom';
import appartments from '../logements.json'

export default function HomeCard() {
    return (
        <div className='mainHome-section'>
                {appartments.map((appartments) => (
               <Link to={`/appartements/${appartments.id}`} className="mainHome-card-1" key={appartments.id}>
                  <img src={appartments.cover} alt="logement"className="mainHome-Image"/>
                     <span className="mainHome-title">{appartments.title}</span>
               </Link> ))}
        </div>
    )

}