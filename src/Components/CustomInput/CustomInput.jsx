import React from 'react';
import * as PropTypes from 'prop-types';
import FinishBoard from '../Boards/FinishBoard';
import style from './CustomInput.module.css';


class CustomTextArea extends React.Component {

    constructor() {
        super()
        this.state = {
            startTimeMs: new Date().getTime(),
            disabled: false,
            result: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleMistake = this.handleMistake.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleDisable = this.handleDisable.bind(this);

        this.reloadLesson = this.reloadLesson.bind(this);
        this.completionPercentage = this.completionPercentage.bind(this);
        this.charactersPerMinute = this.charactersPerMinute.bind(this);

        this.carriage = this.carriage.bind(this);

    }

    handleChange(event) {
        let lesson = this.props.lesson;
        let inputValue = event.target.value;

        this.handleMistake(inputValue, lesson);
        this.handleComplete(inputValue, lesson);
        this.completionPercentage(inputValue, lesson);
        this.charactersPerMinute(inputValue);

        this.carriage();

        this.props.passLastLetter(inputValue.slice(-1));
        // this.props.passLastLetter(this.props.lesson[inputValue.length])
    }

    handleMistake(inputValue, lesson) {

        if (this.props.numberOfMistake === 2) {
            this.handleDisable();
        }

        if (inputValue.slice(-1) !== lesson[inputValue.length - 1]) {
            this.props.mistakeCounter();
            this.props.handleMistake(true);
        } else {
            this.props.handleMistake(false);
        }
    }

    handleComplete(inputValue, lesson) {
        if (inputValue.length === lesson.length) {
            this.setState({ result: true });
            this.handleDisable();
        }
    }

    completionPercentage(inputValue, lesson) {
        let percentage = Math.ceil(inputValue.length / lesson.length * 100);
        this.props.completionPercentage(percentage);
    }

    charactersPerMinute(inputValue) {
        let startTimeMs = this.state.startTimeMs;

        let timePassedMs = new Date().getTime();
        let timePassedMin = (timePassedMs - startTimeMs) / 1000 / 60;
        let cpm = Math.ceil(inputValue.length / timePassedMin);
        this.props.charactersPerMinute(cpm);
    }

    reloadLesson() {
        this.props.reloadLesson();
    }

    handleDisable() {
        this.setState({ disabled: true });
    }

    carriage() {
        let leftText = document.getElementById('leftText');
        let finishText = document.getElementById('finishText');

        finishText.textContent += leftText.textContent[0];
        leftText.textContent = leftText.textContent.slice(1);
    }

    render() {
        return (
            <div className={style.InputBox}>
                <input autoFocus
                    className={style.inputField}
                    disabled={this.state.disabled}
                    onChange={this.handleChange}
                />

                <span className={style.displayText}>
                    <span id='finishText' className={style.cursor} />
                    <span id='leftText' className={style.unfinishedText}>{this.props.lesson}</span>
                </span>

                {this.state.disabled && <FinishBoard result={this.state.result}
                    reloadLesson={this.reloadLesson} />}
            </div>
        )
    }
}

CustomTextArea.propTypes = {
    lesson: PropTypes.string,
    reloadLesson: PropTypes.func,

    numberOfMistake: PropTypes.number,
    handleMistake: PropTypes.func,
    mistakeCounter: PropTypes.func,

    completionPercentage: PropTypes.func,
    charactersPerMinute: PropTypes.func,

    passLastLetter: PropTypes.func
}

export default CustomTextArea;