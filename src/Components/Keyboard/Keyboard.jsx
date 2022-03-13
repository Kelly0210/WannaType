import React from 'react';
import style from './Keyboard.module.css'


const Keyboard = () => {
    return (
        <div className={style.container}>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyWaveBlue}`}><span className={style.containerKey}>`</span></div>
            <div className={`${style.key} ${style.keyGreen}`}><span className={style.containerKey}>1</span></div>
            <div className={`${style.key} ${style.keyGreen}`}><span className={style.containerKey}>2</span></div>
            <div className={`${style.key} ${style.keyBlue}`}><span className={style.containerKey}>3</span></div>
            <div className={`${style.key} ${style.keyPink}`}><span className={style.containerKey}>4</span></div>
            <div className={`${style.key} ${style.keyOrange}`}><span className={style.containerKey}>5</span></div>
            <div className={`${style.key} ${style.keyOrange}`}><span className={style.containerKey}>6</span></div>
            <div className={`${style.key} ${style.keyYellow}`}><span className={style.containerKey}>7</span></div>
            <div className={`${style.key} ${style.keyPink}`}><span className={style.containerKey}>8</span></div>
            <div className={`${style.key} ${style.keyBlue}`}><span className={style.containerKey}>9</span></div>
            <div className={`${style.key} ${style.keyGreen}`}><span className={style.containerKey}>0</span></div>
            <div className={`${style.key} ${style.keyGreen}`}><span className={style.containerKey}>-</span></div>
            <div className={`${style.key} ${style.keyGreen}`}><span className={style.containerKey}>=</span></div>
            <div className={`${style.key} ${style.keyBackSpace} ${style.keyWaveBlue}`}><span className={style.containerKey}>←</span></div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyTab} ${style.keyWaveBlue}`}><span className={style.containerKey}>TAB</span></div>
            <div className={`${style.key} ${style.keyGreen}`}><span className={style.containerKey}>Q</span></div>
            <div className={`${style.key} ${style.keyBlue}`}><span className={style.containerKey}>W</span></div>
            <div className={`${style.key} ${style.keyPink}`}><span className={style.containerKey}>E</span></div>
            <div className={`${style.key} ${style.keyOrange}`}><span className={style.containerKey}>R</span></div>
            <div className={`${style.key} ${style.keyOrange}`}><span className={style.containerKey}>T</span></div>
            <div className={`${style.key} ${style.keyYellow}`}><span className={style.containerKey}>Y</span></div>
            <div className={`${style.key} ${style.keyYellow}`}><span className={style.containerKey}>U</span></div>
            <div className={`${style.key} ${style.keyPink}`}><span className={style.containerKey}>I</span></div>
            <div className={`${style.key} ${style.keyBlue}`}><span className={style.containerKey}>O</span></div>
            <div className={`${style.key} ${style.keyGreen}`}><span className={style.containerKey}>P</span></div>
            <div className={`${style.key} ${style.keyGreen}`}><span className={style.containerKey}>[</span></div>
            <div className={`${style.key} ${style.keyGreen}`}><span className={style.containerKey}>]</span></div>
            <div className={`${style.key} ${style.keyWaveBlue}`}><span className={style.containerKey}>\</span></div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyCaps} ${style.keyWaveBlue}`}><span className={style.containerKey}>CAPS</span></div>
            <div className={`${style.key} ${style.keyGreen}`}><span className={style.containerKey}>A</span></div>
            <div className={`${style.key} ${style.keyBlue}`}><span className={style.containerKey}>S</span></div>
            <div className={`${style.key} ${style.keyPink}`}><span className={style.containerKey}>D</span></div>
            <div className={`${style.key} ${style.keyOrange}`}><span className={style.containerKey}>F</span></div>
            <div className={`${style.key} ${style.keyOrange}`}><span className={style.containerKey}>G</span></div>
            <div className={`${style.key} ${style.keyYellow}`}><span className={style.containerKey}>H</span></div>
            <div className={`${style.key} ${style.keyYellow}`}><span className={style.containerKey}>J</span></div>
            <div className={`${style.key} ${style.keyPink}`}><span className={style.containerKey}>K</span></div>
            <div className={`${style.key} ${style.keyBlue}`}><span className={style.containerKey}>L</span></div>
            <div className={`${style.key} ${style.keyGreen}`}><span className={style.containerKey}>;</span></div>
            <div className={`${style.key} ${style.keyGreen}`}><span className={style.containerKey}>'</span></div>
            <div className={`${style.key} ${style.keyEnter} ${style.keyWaveBlue}`}><span className={style.containerKey}>ENTER</span></div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyShift} ${style.keyWaveBlue}`}><span className={style.containerKey}>SHIFT</span></div>
            <div className={`${style.key} ${style.keyGreen}`}><span className={style.containerKey}>Z</span></div>
            <div className={`${style.key} ${style.keyBlue}`}><span className={style.containerKey}>X</span></div>
            <div className={`${style.key} ${style.keyPink}`}><span className={style.containerKey}>C</span></div>
            <div className={`${style.key} ${style.keyOrange}`}><span className={style.containerKey}>V</span></div>
            <div className={`${style.key} ${style.keyOrange}`}><span className={style.containerKey}>B</span></div>
            <div className={`${style.key} ${style.keyYellow}`}><span className={style.containerKey}>N</span></div>
            <div className={`${style.key} ${style.keyYellow}`}><span className={style.containerKey}>M</span></div>
            <div className={`${style.key} ${style.keyPink}`}><span className={style.containerKey}>,</span></div>
            <div className={`${style.key} ${style.keyBlue}`}><span className={style.containerKey}>.</span></div>
            <div className={`${style.key} ${style.keyGreen}`}><span className={style.containerKey}>/</span></div>
            <div className={`${style.key} ${style.keyShift} ${style.keyWaveBlue}`}><span className={style.containerKey}>SHIFT</span></div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keySpace} ${style.keyWaveBlue}`}></div>    
        </div>
        </div>
        
    )
}

export default Keyboard;