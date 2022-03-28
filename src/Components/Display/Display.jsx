import React from 'react';
import style from './Display.module.css';
import * as PropTypes from 'prop-types';

class Display extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        let {lesson, mistake} = this.props;

        const displayBox = document.getElementById('displayBox');
        const leftText = document.getElementById('leftText');
        const finishText = document.getElementById('finishText');

        if (mistake) {
            displayBox.classList.add(`${style.displayMistake}`);
            leftText.textContent = leftText.textContent.slice(1);

            finishText.textContent += leftText.textContent[0];
            setTimeout(() => {
                displayBox.classList.remove(`${style.displayMistake}`)
            }, 1500);
        } else {
            // displayBox.classList.add(`${style.displayMistake}`);
            finishText.textContent += leftText.textContent[0];
            leftText.textContent = leftText.textContent.slice(1);
        }
    }

    render() {
        let {lesson, mistake} = this.props;
        return (
            <div id='displayBox' className={style.displayBox}>
            <span className={style.displayText}>
                <span id='finishText' className={style.cursor}/>
                <span id='leftText' className={style.unfinishedText}>{lesson}</span>
            </span>
            </div>
        )
    }
}

Display.propTypes = {
    lesson: PropTypes.string,
    mistake: PropTypes.bool
}

export default Display;