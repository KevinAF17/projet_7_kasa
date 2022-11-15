import '../styles/footer.css';
import ftLogo from '../Images/logo_kasa_footer.png';

export default function Footer() {
    return (
       <div className='footer'>
          <div className='footer-police'>
             <img src={ftLogo} alt="logo de Kasa"></img>
          </div>
          <p className='footer-police'>© 2020 Kasa. All rights reserved</p>
       </div>
    );
 }