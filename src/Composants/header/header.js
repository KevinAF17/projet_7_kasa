import logo from '../../Images/logo_kasa.png';
import {NavLink} from 'react-router-dom';
import '../Style/header.scss';

export default function mainHeader(){
    {
        return (
           <div className="header">
              <nav>
                 <img className="header__logo" src={logo} alt="logo de Kasa"></img>
                 <ul>
                    <li>
                       <NavLink to="/" className={headerStyle.nav}>
                          Accueil
                       </NavLink>
                    </li>
                    <li>
                       <NavLink to="./page_aide" className={headerStyle.nav}>
                          A Propos
                       </NavLink>
                    </li>
                 </ul>
              </nav>
           </div>
        );
     }
}