import React from 'react';
import { Redirect } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import FinishBoard from '../Boards/FinishBoard';
import style from './CustomTextArea.module.css';


class CustomTextArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            disabled: false,
            startTime: new Date().getTime(),
            win: false,
            cpm: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleMistake = this.handleMistake.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleDisable = this.handleDisable.bind(this);
        this.reloadLesson = this.reloadLesson.bind(this);
        this.completionPercentage = this.completionPercentage.bind(this);
        this.charactersPerMinute = this.charactersPerMinute.bind(this);
    }

    handleChange(event) {
        let lesson = this.props.lesson;
        let stateValue = this.state.value;
        let startTime = this.state.startTime;
        let inputValue = event.target.value;


        this.setState({ value: event.target.value });
        this.props.passLastLetter(inputValue.slice(-1));

        this.handleMistake(inputValue, stateValue, lesson);
        this.handleComplete(stateValue, lesson);
        this.completionPercentage(stateValue, lesson);
        this.charactersPerMinute(startTime, inputValue);
    }

    handleMistake(inputValue, stateValue, lesson) {

        if (this.props.numberOfMistake === 2) {
            this.handleDisable();
        }

        if (inputValue.slice(-1) !== lesson[stateValue.length]) {
            this.props.mistakeCounter();
            this.props.handleMistake(true);
        } else {
            this.props.handleMistake(false);
        }
    }

    handleComplete(stateValue, lesson) {
        if (stateValue.length === lesson.length) {
            this.setState({ win: true });
            this.handleDisable();
            // <Redirect to='/training/lesson-1/chapter-2' />
        }
    }

    completionPercentage(stateValue, lesson) {
        let percentage = Math.ceil(stateValue.length / lesson.length * 100);
        this.props.completionPercentage(percentage);
    }

    charactersPerMinute(startTime, inputValue) {
        let timePassedMs = new Date().getTime();
        let timePassedMin = (timePassedMs - startTime) / 1000 / 60;
        this.setState({cpm: Math.ceil(inputValue.length / timePassedMin)});

        this.props.charactersPerMinute(this.state.cpm);
    }

    handleDisable() {
        this.setState({ disabled: true });
    }

    reloadLesson() {
        this.props.reloadLesson();
    }

    render() {
        return (
            <div className={style.textareaContainer}>
                <textarea autoFocus
                    className={style.inputField}

                    disabled={this.state.disabled}
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                {this.state.disabled && <FinishBoard result={this.state.win}
                    reloadLesson={this.reloadLesson} />}
            </div>
        )
    }
}

CustomTextArea.propTypes = {
    lesson: PropTypes.string,
    numberOfMistake: PropTypes.number,
    handleMistake: PropTypes.func,
    mistakeCounter: PropTypes.func,
    completionPercentage: PropTypes.func,
}

export default CustomTextArea;