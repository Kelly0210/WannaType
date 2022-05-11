import React from 'react';
import style from './Footer.module.css';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={style.footer}>

            <div className={style.infoContainer}>

                <img src={logo} alt='logo' />

                <div className={style.copyrightContainer}>
                    &copy; 2022 : Alan Keller
                </div>
            </div>

            <div className={style.linksContainer}>
                <ul>
                    <li><Link to='/' className={style.footerLink}>Home</Link></li>
                    <li><Link to='/about' className={style.footerLink}>About</Link></li>
                    <li><Link to='/contact' className={style.footerLink}>Contact</Link></li>
                </ul>
            </div>

            <div className={style.linksContainer}>
                <ul>
                    <li><Link to='/FAQ' className={style.footerLink}>FAQ</Link></li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer;