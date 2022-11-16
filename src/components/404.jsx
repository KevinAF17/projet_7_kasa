import { Link } from "react-router-dom";
import '../styles/404notFound.css';

export default function notFound() {
    return (
        <div className='not-foundPage'>
            <h1 className='not-found-number'>404</h1>
            <p className='not-found-police'>Oups! La page que vous demandez n'existe pas !</p>
            <Link to= "/" className='not-found-BackHome'>Retournez sur la page d'accueil</Link>
        </div>
    )
}