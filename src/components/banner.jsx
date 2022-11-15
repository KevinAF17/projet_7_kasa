import '../styles/banner.css';
import imageBanner from '../Images/logo_kasa_banner_acc.png'

export default function homeBanner(){
    return (
        <div className='banner'>
            <div className='banner-content'>
                <img className='banner-image 'src={imageBanner} alt='Falaise en bord de mer'/>
                <h1 className='banner-police'>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}