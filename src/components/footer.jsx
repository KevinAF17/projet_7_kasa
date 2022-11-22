import '../styles/footer.css';
import ftLogo from '../Images/logo_kasa_footer.png';

export default function Footer() {
    return (
       <footer className='footer'>
             <img className='footer-logo' src={ftLogo} alt='Logo Kasa'></img>
          <p className='footer-police'>© 2020 Kasa. All rights reserved</p>         
       </footer>
    );
}