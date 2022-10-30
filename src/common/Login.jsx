import React from 'react';
import style from './Login.module.css';
import loginImg from '../assets/img/loginImg.png';

const Login = () => {
    return(
        <div className={style.loginContainer}>
        <img src={loginImg} alt='loginImg' />

        <span className={style.loginText}>
          <span to='#' className={style.loginLink}>Log In</span>
          <span> or </span>
          <span to='#' className={style.loginLink}>Sign Up</span>
        </span>
        

      </div>
    )
}

export default Login;