import '../styles/404footer.css';
import ftLogo from '../Images/logo_kasa_footer.png';

export default function Footer() {
    return (
       <div className='notfound-footer'>
             <img className='not-found-footer-logo' src={ftLogo} alt='Logo Kasa'></img>
          <p className='not-found-footer-police'>© 2020 Kasa. All rights reserved</p>         
       </div>
    );
 }