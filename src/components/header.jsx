import React from 'react';
import logo from '../Images/logo_kasa.png';
import { Link } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {
    return (
       <header className='header'>
        <img className='header-logo' src={logo} alt='Logo Kasa'></img>
          <nav>
                   <Link to='/' className=''>
                      Accueil
                   </Link>
                   <Link to='/about' className=''>
                      A Propos
                   </Link>
          </nav>
       </header>
    );
 }