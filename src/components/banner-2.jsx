import '../styles/banner.css';
import imageBanner from '../Images/logo_kasa_banner_acc.png'

export default function aboutBanner(){
    return (
        <div className='banner'>
                <img className='banner-image 'src={imageBanner} alt='Falaise en bord de mer'/>
        </div>
    )
}