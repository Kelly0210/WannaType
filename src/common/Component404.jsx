import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Component404.module.css';

const Component404 = () => {
    return (
        <div className={style.container404}>
            <p className={style.number404}>404</p>
            <p className={style.text404}>Ooops... Page not found</p>
            <p className={style.text404}>Take me back to <NavLink to='/' className={style.linkHome}>home</NavLink></p>
        </div>
    )
}

export default Component404;