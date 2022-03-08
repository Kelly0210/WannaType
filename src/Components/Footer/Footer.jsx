import react from 'react';
import style from './Footer.module.css';
 import logo from '../../assets/img/logo.png';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div>По всем вопросам - <a href='#'>alan.keller0210@gmail.com</a></div>
            <div>
              <img src={logo} alt='logo'/>
            </div>
            <div>
            &copy; 2022 : Alan Keller
            </div>
        </footer>
    );
}

export default Footer;