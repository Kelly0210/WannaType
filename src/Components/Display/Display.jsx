import React from 'react';
import style from './Display.module.css';

const Display = (props) => {
    return (
        <div className={style.displayBox}>
            <span className={style.displayText}>{props.lesson}</span>
        </div>
    )
}

export default Display;