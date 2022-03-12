import React from 'react';
import style from './FallingKeys.module.css'

let combinedClass = `${style.key}`;

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
                 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                 'o', 'p', 'q', 'r', 's', 't', 'u',
                 'v', 'w', 'x', 'y', 'z'];
     
const GenerateKey = () => {
    let generateLetter = letters[Math.floor(Math.random() * 26)];

    switch(generateLetter) {
        // case 'q' || 'a' || 'z' || 'p': --> Not work
        // case 'q', 'a', ... --> also not work
        case 'q':
        case 'a':
        case 'z':
        case 'p':
            combinedClass = `${style.key} ${style.keyGreen}`;
            break;

        case 'w': 
        case 's':
        case 'x':
        case 'o':
        case 'l':
            combinedClass = `${style.key} ${style.keyWaveBlue}`;
            break;
        
        case 'e':
        case 'd':
        case 'c':
        case 'i':
        case 'k':
            combinedClass = `${style.key} ${style.keyPink}`;
            break;
        
        case 'r':
        case 'f':
        case 'v':
        case 't':
        case 'g':
        case 'b': 
            combinedClass = `${style.key} ${style.keyOrange}`;
            break;  

        case 'y':
        case 'h':
        case 'n':
        case 'u':
        case 'j':
        case 'm':
            combinedClass = `${style.key} ${style.keyYellow}`;
            break;             
            
        default:
            combinedClass = `${style.key}`;
            break;
    }
    return <div className={combinedClass}>{generateLetter}</div>;
} 

const FallingKeys = () => {
    return(
        <>
        <div className={style.display}>
         {GenerateKey()}
        </div>
        </>
    )
}
export default FallingKeys;