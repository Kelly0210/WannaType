import React from 'react';
import style from './Display.module.css';

const Display = ({lesson, mistake}) => {

    const displayBox = document.getElementById('displayBox');
    const leftText = document.getElementById('leftText');
    const finishText = document.getElementById('finishText');

    if (mistake) {
        displayBox.classList.add(`${style.displayMistake}`);
        leftText.textContent = leftText.textContent.slice(1);
        
        finishText.textContent += leftText.textContent[0];
        setTimeout(() => {displayBox.classList.remove(`${style.displayMistake}`)}, 1500);
    }

    return (
        <div id='displayBox' className={style.displayBox} >
            <span className={style.displayText}>
                <span id='finishText' className={style.cursor}>test</span>
                <span id='leftText' className={style.unfinishedText}>{lesson}</span>
            </span>
        </div>
    )
}

export default Display;