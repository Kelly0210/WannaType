import React from 'react';
import { Link } from "react-router-dom";
import style from './Header.module.css'


const Header = () => {
    return(
        <header className={style.header}>
        <h1 className={style.companyName}><Link to='/' className={style.linkHome}>Wanna Type</Link></h1>
      </header>
    );
}

export default Header;