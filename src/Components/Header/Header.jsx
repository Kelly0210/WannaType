import React from 'react';
import { Link } from "react-router-dom";
import style from './Header.module.css';
import loginImg from '../../assets/img/loginImg.png';


const Header = () => {
  return (
    <header className={style.header}>

      <div className={style.loginContainer}>
        <img src={loginImg} alt='loginImg' />

        <span className={style.loginText}>
          <Link to='#'>Log In</Link> or <Link to='#'>Sign Up</Link>
        </span>

      </div>
      <h1 className={style.companyName}><Link to='/' className={style.linkHome}>Wanna Type</Link></h1>
    </header>
  );
}

export default Header;