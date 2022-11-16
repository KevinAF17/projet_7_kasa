import '../styles/mainHome.css';
import {Link} from 'react-router-dom';
import appartments from '../logements.json';

export default function homeCard({cover, title, id}) {
    return (
        <div className='mainHome-section'>
                <div className='mainHome-card'>
                    <img src={cover} alt={title} className='mainHome-Image'/>
                    <h1 className='mainHome-title'>{title}</h1>
                </div>
        </div>
    )
}