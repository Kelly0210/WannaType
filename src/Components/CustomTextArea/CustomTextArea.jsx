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
            
            win: false,
            wpm: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleMistake = this.handleMistake.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleDisable = this.handleDisable.bind(this);
        this.reloadLesson = this.reloadLesson.bind(this);
        this.completionPercentage = this.completionPercentage.bind(this);
    }

    handleChange(event) {
        let lesson = this.props.lesson;
        let stateValue = this.state.value;
        let inputValue = event.target.value;

        this.setState({ value: event.target.value });
        this.props.passLastLetter(inputValue.slice(-1));

        this.handleMistake(inputValue, stateValue, lesson);
        this.handleComplete(stateValue, lesson);
        this.completionPercentage(stateValue, lesson);
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