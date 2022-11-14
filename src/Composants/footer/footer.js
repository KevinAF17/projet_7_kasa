import footerStyle from '../footer/footer.scss';
import imageFooter from '../../Images/logo_kasa.png';


function Footer () {
    return (
        <footer className= {footerStyle.footer}>
            <img src= { imageFooter } alt="Logo de l'Agence Kasa" className= {footerStyle.footer_logo} />
            <p className= {footerStyle.footer_text}> © 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer