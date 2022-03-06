import React from 'react';
import style from './Keyboard.module.css'


const Keyboard = () => {
    return (
        <div className={style.container}>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyGreen}`}>`</div>
            <div className={`${style.key} ${style.keyGreen}`}>1</div>
            <div className={`${style.key} ${style.keyOrange}`}>2</div>
            <div className={style.key}>3</div>
            <div className={style.key}>4</div>
            <div className={style.key}>5</div>
            <div className={style.key}>6</div>
            <div className={`${style.key} ${style.keyYellow}`}>7</div>
            <div className={style.key}>8</div>
            <div className={style.key}>9</div>
            <div className={style.key}>0</div>
            <div className={style.key}>-</div>
            <div className={style.key}>=</div>
            <div className={`${style.key} ${style.keyBackSpace}`}>←</div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyTab}`}>TAB</div>
            <div className={`${style.key} ${style.keyGreen}`}>Q</div>
            <div className={`${style.key} ${style.keyOrange}`}>W</div>
            <div className={style.key}>E</div>
            <div className={style.key}>R</div>
            <div className={style.key}>T</div>
            <div className={`${style.key} ${style.keyYellow}`}>Y</div>
            <div className={`${style.key} ${style.keyYellow}`}>U</div>
            <div className={style.key}>I</div>
            <div className={style.key}>O</div>
            <div className={style.key}>P</div>
            <div className={style.key}>[</div>
            <div className={style.key}>]</div>
            <div className={style.key}>\</div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyCaps}`}>CAPS</div>
            <div className={`${style.key} ${style.keyGreen}`}>A</div>
            <div className={`${style.key} ${style.keyOrange}`}>S</div>
            <div className={style.key}>D</div>
            <div className={style.key}>F</div>
            <div className={style.key}>G</div>
            <div className={`${style.key} ${style.keyYellow}`}>H</div>
            <div className={`${style.key} ${style.keyYellow}`}>J</div>
            <div className={style.key}>K</div>
            <div className={style.key}>L</div>
            <div className={style.key}>;</div>
            <div className={style.key}>'</div>
            <div className={`${style.key} ${style.keyEnter}`}>ENTER</div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyShift}`}>SHIFT</div>
            <div className={`${style.key} ${style.keyGreen}`}>Z</div>
            <div className={`${style.key} ${style.keyOrange}`}>X</div>
            <div className={style.key}>C</div>
            <div className={style.key}>V</div>
            <div className={style.key}>B</div>
            <div className={`${style.key} ${style.keyYellow}`}>N</div>
            <div className={`${style.key} ${style.keyYellow}`}>M</div>
            <div className={style.key}>,</div>
            <div className={style.key}>.</div>
            <div className={style.key}>/</div>
            <div className={`${style.key} ${style.keyShift}`}>SHIFT</div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keySpace}`}></div>    
        </div>
        </div>
        
    )
}

export default Keyboard;