import React from 'react';
import * as PropTypes from 'prop-types';
import FinishBoard from '../Boards/FinishBoard';
import style from './CustomInput.module.css';


class CustomInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startTimeMs: new Date().getTime(),
            disabled: false,
            result: false,
        }
    }

    handleChange = (event) => {
        let inputValue = event.target.value;
        let generatedText = this.props.generatedText;

        this.handleMistake(inputValue, generatedText);
        this.handleComplete(inputValue, generatedText);
        this.completionPercentage(inputValue, generatedText);
        this.charactersPerMinute(inputValue);

        this.carriage();

        this.props.passLastLetter(inputValue.slice(-1));
    }

    handleMistake = (inputValue, generatedText) => {

        if (this.props.numberOfMistake === 2) {
            this.handleDisable();
        }

        if (inputValue.slice(-1) !== generatedText[inputValue.length - 1]) {
            this.props.mistakeCounter();
            this.props.handleMistake(true);
        } else {
            this.props.handleMistake(false);
        }
    }

    completionPercentage = (inputValue, generatedText) => {
        let percentage = Math.ceil(inputValue.length / generatedText.length * 100);
        this.props.completionPercentage(percentage);
    }

    charactersPerMinute = (inputValue) => {
        let startTimeMs = this.state.startTimeMs;

        let timePassedMs = new Date().getTime();
        let timePassedMin = (timePassedMs - startTimeMs) / 1000 / 60;
        let cpm = Math.ceil(inputValue.length / timePassedMin);

        this.props.charactersPerMinute(cpm);
    }

    handleComplete = (inputValue, generatedText) => {
        if (inputValue.length === generatedText.length) {
            this.setState({ result: true });
            this.handleDisable();
        }
    }

    handleDisable = () => {
        this.setState({ disabled: true });
    }

    carriage = () => {
        let leftText = document.getElementById('leftText');
        let finishText = document.getElementById('finishText');

        finishText.textContent += leftText.textContent[0];
        leftText.textContent = leftText.textContent.slice(1);
    }

    render = () => {
        return (
            <div className={style.InputBox}>
                <input autoFocus
                    disabled={this.state.disabled}
                    onChange={this.handleChange}
                />

                <span className={style.displayText}>
                    <span id='finishText' className={style.cursor} />
                    <span id='leftText' className={style.unfinishedText}>{this.props.generatedText}</span>
                </span>

                {this.state.disabled && <FinishBoard result={this.state.result}
                    reloadLesson={this.props.reloadLesson} />}
            </div>
        )
    }
}

CustomInput.propTypes = {
    generatedText: PropTypes.string,
    reloadLesson: PropTypes.func,

    numberOfMistake: PropTypes.number,
    handleMistake: PropTypes.func,
    mistakeCounter: PropTypes.func,

    completionPercentage: PropTypes.func,
    charactersPerMinute: PropTypes.func,

    passLastLetter: PropTypes.func
}

export default CustomInput;