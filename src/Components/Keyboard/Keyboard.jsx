import React from 'react';
import style from './Keyboard.module.css'


const Keyboard = () => {
    return (
        <div className={style.container}>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyWaveBlue}`}>`</div>
            <div className={`${style.key} ${style.keyGreen}`}>1</div>
            <div className={`${style.key} ${style.keyGreen}`}>2</div>
            <div className={`${style.key} ${style.keyBlue}`}>3</div>
            <div className={`${style.key} ${style.keyPink}`}>4</div>
            <div className={`${style.key} ${style.keyOrange}`}>5</div>
            <div className={`${style.key} ${style.keyOrange}`}>6</div>
            <div className={`${style.key} ${style.keyYellow}`}>7</div>
            <div className={`${style.key} ${style.keyPink}`}>8</div>
            <div className={`${style.key} ${style.keyBlue}`}>9</div>
            <div className={`${style.key} ${style.keyGreen}`}>0</div>
            <div className={`${style.key} ${style.keyGreen}`}>-</div>
            <div className={`${style.key} ${style.keyGreen}`}>=</div>
            <div className={`${style.key} ${style.keyBackSpace} ${style.keyWaveBlue}`}>←</div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyTab} ${style.keyWaveBlue}`}>TAB</div>
            <div className={`${style.key} ${style.keyGreen}`}>Q</div>
            <div className={`${style.key} ${style.keyBlue}`}>W</div>
            <div className={`${style.key} ${style.keyPink}`}>E</div>
            <div className={`${style.key} ${style.keyOrange}`}>R</div>
            <div className={`${style.key} ${style.keyOrange}`}>T</div>
            <div className={`${style.key} ${style.keyYellow}`}>Y</div>
            <div className={`${style.key} ${style.keyYellow}`}>U</div>
            <div className={`${style.key} ${style.keyPink}`}>I</div>
            <div className={`${style.key} ${style.keyBlue}`}>O</div>
            <div className={`${style.key} ${style.keyGreen}`}>P</div>
            <div className={`${style.key} ${style.keyGreen}`}>[</div>
            <div className={`${style.key} ${style.keyGreen}`}>]</div>
            <div className={`${style.key} ${style.keyWaveBlue}`}>\</div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyCaps} ${style.keyWaveBlue}`}>CAPS</div>
            <div className={`${style.key} ${style.keyGreen}`}>A</div>
            <div className={`${style.key} ${style.keyBlue}`}>S</div>
            <div className={`${style.key} ${style.keyPink}`}>D</div>
            <div className={`${style.key} ${style.keyOrange}`}>F</div>
            <div className={`${style.key} ${style.keyOrange}`}>G</div>
            <div className={`${style.key} ${style.keyYellow}`}>H</div>
            <div className={`${style.key} ${style.keyYellow}`}>J</div>
            <div className={`${style.key} ${style.keyPink}`}>K</div>
            <div className={`${style.key} ${style.keyBlue}`}>L</div>
            <div className={`${style.key} ${style.keyGreen}`}>;</div>
            <div className={`${style.key} ${style.keyGreen}`}>'</div>
            <div className={`${style.key} ${style.keyEnter} ${style.keyWaveBlue}`}>ENTER</div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyShift} ${style.keyWaveBlue}`}>SHIFT</div>
            <div className={`${style.key} ${style.keyGreen}`}><span>Z</span></div>
            <div className={`${style.key} ${style.keyBlue}`}>X</div>
            <div className={`${style.key} ${style.keyPink}`}>C</div>
            <div className={`${style.key} ${style.keyOrange}`}>V</div>
            <div className={`${style.key} ${style.keyOrange}`}>B</div>
            <div className={`${style.key} ${style.keyYellow}`}>N</div>
            <div className={`${style.key} ${style.keyYellow}`}>M</div>
            <div className={`${style.key} ${style.keyPink}`}>,</div>
            <div className={`${style.key} ${style.keyBlue}`}>.</div>
            <div className={`${style.key} ${style.keyGreen}`}>/</div>
            <div className={`${style.key} ${style.keyShift} ${style.keyWaveBlue}`}>SHIFT</div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keySpace} ${style.keyWaveBlue}`}></div>    
        </div>
        </div>
        
    )
}

export default Keyboard;