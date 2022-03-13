import React from 'react';
import style from './Footer.module.css';
import logo from '../../assets/img/logo.png';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.mailContainer}>По всем вопросам - <a href='#' className={style.gmail}>alan.keller0210@gmail.com</a></div>
            <div className={style.logoContainer}>
              <img src={logo} alt='logo'/>
            </div>
            <div>
            &copy; 2022 : Alan Keller
            </div>
        </footer>
    );
}

export default Footer;