import React from 'react';
import style from './Keyboard.module.css'


const Keyboard = (props) => {



if (props.mistake) {
    let docum = document.getElementById(props.lastLetter);
    docum.classList.add(`${style.wrongKey}`);
} else {
    // let docum = document.getElementById(props.lastLetter);
    // docum.classList.add(`${style.nextKey}`);
}
    return (
        <div className={style.keyboardContainer}>
        <div className={style.row}>
            <div id='`' className={`${style.key} ${style.keyWaveBlue}`}>`</div>
            <div id='1' className={`${style.key} ${style.keyGreen}`}>1</div>
            <div id='2' className={`${style.key} ${style.keyGreen}`}>2</div>
            <div id='3' className={`${style.key} ${style.keyBlue}`}>3</div>
            <div id='4' className={`${style.key} ${style.keyPink}`}>4</div>
            <div id='5' className={`${style.key} ${style.keyOrange}`}>5</div>
            <div id='6' className={`${style.key} ${style.keyOrange}`}>6</div>
            <div id='7' className={`${style.key} ${style.keyYellow}`}>7</div>
            <div id='8' className={`${style.key} ${style.keyPink}`}>8</div>
            <div id='9' className={`${style.key} ${style.keyBlue}`}>9</div>
            <div id='0' className={`${style.key} ${style.keyGreen}`}>0</div>
            <div id='-' className={`${style.key} ${style.keyGreen}`}>-</div>
            <div id='=' className={`${style.key} ${style.keyGreen}`}>=</div>
            <div className={`${style.key} ${style.keyBackSpace} ${style.keyWaveBlue}`}>←</div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyTab} ${style.keyWaveBlue}`}>TAB</div>
            <div id='q' className={`${style.key} ${style.keyGreen}`}>Q</div>
            <div id='w' className={`${style.key} ${style.keyBlue}`}>W</div>
            <div id='e' className={`${style.key} ${style.keyPink}`}>E</div>
            <div id='r' className={`${style.key} ${style.keyOrange}`}>R</div>
            <div id='t' className={`${style.key} ${style.keyOrange}`}>T</div>
            <div id='y' className={`${style.key} ${style.keyYellow}`}>Y</div>
            <div id='u' className={`${style.key} ${style.keyYellow}`}>U</div>
            <div id='i' className={`${style.key} ${style.keyPink}`}>I</div>
            <div id='o' className={`${style.key} ${style.keyBlue}`}>O</div>
            <div id='p' className={`${style.key} ${style.keyGreen}`}>P</div>
            <div id='[' className={`${style.key} ${style.keyGreen}`}>[</div>
            <div id=']' className={`${style.key} ${style.keyGreen}`}>]</div>
            <div id='\' className={`${style.key} ${style.keyWaveBlue}`}>\</div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyCaps} ${style.keyWaveBlue}`}>CAPS</div>
            <div id='a' className={`${style.key} ${style.keyGreen}`}>A</div>
            <div id='s' className={`${style.key} ${style.keyBlue}`}>S</div>
            <div id='d' className={`${style.key} ${style.keyPink}`}>D</div>
            <div id='f' className={`${style.key} ${style.keyOrange}`}>F</div>
            <div id='g' className={`${style.key} ${style.keyOrange}`}>G</div>
            <div id='h' className={`${style.key} ${style.keyYellow}`}>H</div>
            <div id='j' className={`${style.key} ${style.keyYellow}`}>J</div>
            <div id='k' className={`${style.key} ${style.keyPink}`}>K</div>
            <div id='l' className={`${style.key} ${style.keyBlue}`}>L</div>
            <div id=';' className={`${style.key} ${style.keyGreen}`}>;</div>
            <div id="'" className={`${style.key} ${style.keyGreen}`}>'</div>
            <div className={`${style.key} ${style.keyEnter} ${style.keyWaveBlue}`}>ENTER</div>
        </div>
        <div className={style.row}>
            <div className={`${style.key} ${style.keyShift} ${style.keyWaveBlue}`}>SHIFT</div>
            <div id='z' className={`${style.key} ${style.keyGreen}`}>Z</div>
            <div id='x' className={`${style.key} ${style.keyBlue}`}>X</div>
            <div id='c' className={`${style.key} ${style.keyPink}`}>C</div>
            <div id='v' className={`${style.key} ${style.keyOrange}`}>V</div>
            <div id='b' className={`${style.key} ${style.keyOrange}`}>B</div>
            <div id='n' className={`${style.key} ${style.keyYellow}`}>N</div>
            <div id='m' className={`${style.key} ${style.keyYellow}`}>M</div>
            <div id=',' className={`${style.key} ${style.keyPink}`}>,</div>
            <div id='.' className={`${style.key} ${style.keyBlue}`}>.</div>
            <div id='/' className={`${style.key} ${style.keyGreen}`}>/</div>
            <div className={`${style.key} ${style.keyShift} ${style.keyWaveBlue}`}>SHIFT</div>
        </div>
        <div className={style.row}>
            <div id=' ' className={`${style.key} ${style.keySpace} ${style.keyWaveBlue}`}> </div>    
        </div>
        </div>
        
    )
}

export default Keyboard;