import React from 'react';
import style from './Display.module.css';
import * as PropTypes from 'prop-types';

class Display extends React.Component {

    componentDidUpdate() {
        const displayBox = document.getElementById('displayBox');
        const leftText = document.getElementById('leftText');
        const finishText = document.getElementById('finishText');

        finishText.textContent += leftText.textContent[0];
        leftText.textContent = leftText.textContent.slice(1);

        if (this.props.mistakeHappend) {
            let test = new Promise(function(resolve, reject) {

            });
            // displayBox.classList.add(`${style.displayMistake}`);
            // setTimeout(() => {
            //     displayBox.classList.remove(`${style.displayMistake}`)
            // }, 1500);
        } else {
            // displayBox.classList.add(`${style.displayMistake}`);
        }
    }

    render() {
        return (
            <div id='displayBox' className={style.displayBox}>
                <span className={style.displayText}>
                    <span id='finishText' className={style.cursor} />
                    <span id='leftText' className={style.unfinishedText}>{this.props.lesson}</span>
                </span>
            </div>
        )
    }
}

Display.propTypes = {
    lesson: PropTypes.string,
    mistakeHappend: PropTypes.bool
}

export default Display;