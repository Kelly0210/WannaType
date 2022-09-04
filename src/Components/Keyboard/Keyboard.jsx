import React from 'react';
import style from './Keyboard.module.css';
import * as PropTypes from 'prop-types';


const Keyboard = (props) => {

    React.useLayoutEffect(() => {
        let pressedButton = document.getElementById(props.lastLetter.toLowerCase());
        if (!pressedButton) return undefined;

        pressedButton.classList.remove(`${style.wrongKey}`);
        pressedButton.classList.remove(`${style.correctKey}`);

        if (props.mistakeHappened) {
            setTimeout(() => { pressedButton.classList.add(`${style.wrongKey}`) }, 0);
        } else {
            setTimeout(() => { pressedButton.classList.add(`${style.correctKey}`) }, 0);
        }
    });


    return (
        <div className={style.keyboardContainer}>
            <div className={style.row}>
                <div id='`' className={`${style.key} ${style.firstBlock}`}>`</div>
                <div id='1' className={`${style.key} ${style.secondBlock}`}>1</div>
                <div id='2' className={`${style.key} ${style.secondBlock}`}>2</div>
                <div id='3' className={`${style.key} ${style.thirdBlock}`}>3</div>
                <div id='4' className={`${style.key} ${style.fourthBlock}`}>4</div>
                <div id='5' className={`${style.key} ${style.fifthBlock}`}>5</div>
                <div id='6' className={`${style.key} ${style.fifthBlock}`}>6</div>
                <div id='7' className={`${style.key} ${style.sixthBlock}`}>7</div>
                <div id='8' className={`${style.key} ${style.fourthBlock}`}>8</div>
                <div id='9' className={`${style.key} ${style.thirdBlock}`}>9</div>
                <div id='0' className={`${style.key} ${style.secondBlock}`}>0</div>
                <div id='-' className={`${style.key} ${style.secondBlock}`}>-</div>
                <div id='=' className={`${style.key} ${style.secondBlock}`}>=</div>
                <div className={`${style.key} ${style.keyBackSpace} ${style.firstBlock}`}>←</div>
            </div>
            <div className={style.row}>
                <div className={`${style.key} ${style.keyTab} ${style.firstBlock}`}>TAB</div>
                <div id='q' className={`${style.key} ${style.secondBlock}`}>Q</div>
                <div id='w' className={`${style.key} ${style.thirdBlock}`}>W</div>
                <div id='e' className={`${style.key} ${style.fourthBlock}`}>E</div>
                <div id='r' className={`${style.key} ${style.fifthBlock}`}>R</div>
                <div id='t' className={`${style.key} ${style.fifthBlock}`}>T</div>
                <div id='y' className={`${style.key} ${style.sixthBlock}`}>Y</div>
                <div id='u' className={`${style.key} ${style.sixthBlock}`}>U</div>
                <div id='i' className={`${style.key} ${style.fourthBlock}`}>I</div>
                <div id='o' className={`${style.key} ${style.thirdBlock}`}>O</div>
                <div id='p' className={`${style.key} ${style.secondBlock}`}>P</div>
                <div id='[' className={`${style.key} ${style.secondBlock}`}>[</div>
                <div id=']' className={`${style.key} ${style.secondBlock}`}>]</div>
                <div id='\' className={`${style.key} ${style.firstBlock}`}>\</div>
            </div>
            <div className={style.row}>
                <div className={`${style.key} ${style.keyCaps} ${style.firstBlock}`}>CAPS</div>
                <div id='a' className={`${style.key} ${style.secondBlock}`}>A</div>
                <div id='s' className={`${style.key} ${style.thirdBlock}`}>S</div>
                <div id='d' className={`${style.key} ${style.fourthBlock}`}>D</div>
                <div id='f' className={`${style.key} ${style.fifthBlock}`}>F</div>
                <div id='g' className={`${style.key} ${style.fifthBlock}`}>G</div>
                <div id='h' className={`${style.key} ${style.sixthBlock}`}>H</div>
                <div id='j' className={`${style.key} ${style.sixthBlock}`}>J</div>
                <div id='k' className={`${style.key} ${style.fourthBlock}`}>K</div>
                <div id='l' className={`${style.key} ${style.thirdBlock}`}>L</div>
                <div id=';' className={`${style.key} ${style.secondBlock}`}>;</div>
                <div id="'" className={`${style.key} ${style.secondBlock}`}>'</div>
                <div className={`${style.key} ${style.keyEnter} ${style.firstBlock}`}>ENTER</div>
            </div>
            <div className={style.row}>
                <div className={`${style.key} ${style.keyShift} ${style.firstBlock}`}>SHIFT</div>
                <div id='z' className={`${style.key} ${style.secondBlock}`}>Z</div>
                <div id='x' className={`${style.key} ${style.thirdBlock}`}>X</div>
                <div id='c' className={`${style.key} ${style.fourthBlock}`}>C</div>
                <div id='v' className={`${style.key} ${style.fifthBlock}`}>V</div>
                <div id='b' className={`${style.key} ${style.fifthBlock}`}>B</div>
                <div id='n' className={`${style.key} ${style.sixthBlock}`}>N</div>
                <div id='m' className={`${style.key} ${style.sixthBlock}`}>M</div>
                <div id=',' className={`${style.key} ${style.fourthBlock}`}>,</div>
                <div id='.' className={`${style.key} ${style.thirdBlock}`}>.</div>
                <div id='/' className={`${style.key} ${style.secondBlock}`}>/</div>
                <div className={`${style.key} ${style.keyShift} ${style.firstBlock}`}>SHIFT</div>
            </div>
            <div className={style.row}>
                <div id=' ' className={`${style.key} ${style.keySpace} ${style.firstBlock}`}></div>
            </div>
        </div>
    )
}

Keyboard.propTypes = {
    lastLetter: PropTypes.string,
    mistakeHappened: PropTypes.bool
}

export default Keyboard;