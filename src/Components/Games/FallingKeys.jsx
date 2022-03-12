import React from 'react';
import style from './FallingKeys.module.css'

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
                 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                 'o', 'p', 'q', 'r', 's', 't', 'u',
                 'v', 'w', 'x', 'y', 'z'];

const GenerateKey = () => {
    return letters[Math.floor(Math.random() * 26)];
} 

const FallingKeys = () => {
    return(
        <>
        <div className={style.key}>{setTimeout(() => GenerateKey(), 50)}</div>
        </>
    )
}
export default FallingKeys;