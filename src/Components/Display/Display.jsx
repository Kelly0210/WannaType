import React from 'react';
import style from './Display.module.css';

const Display = (props) => {

    let combinedClass = `${style.displayBox}`;

    if(props.mistake) {
        combinedClass = `${style.displayBox} ${style.mistakeDisplay}`;
    }

    return (
        <div className={combinedClass}>
            <span className={style.displayText}>{props.lesson}</span>
        </div>
    )
}

export default Display;