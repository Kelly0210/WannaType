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
            lesson: this.props.lesson,
            mistakes: 0,
            disabled: false,
            win: false,
            wpm: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDisable = this.handleDisable.bind(this);
        this.handleMistake = this.handleMistake.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleChange(event) {
        let lesson = this.state.lesson;
        let stateValue = this.state.value;
        let inputValue = event.target.value;

        this.setState({ value: event.target.value });
        this.props.passLastLetter(inputValue.slice(-1));

        this.handleMistake(inputValue, stateValue, lesson);
        this.handleComplete(stateValue, lesson);
        this.handleDisable();
    }

    handleDisable() {
        if (this.state.mistakes === 2) {
            this.setState({ disabled: true });
        }
    }

    handleMistake(inputValue, stateValue, lesson) {
        if (inputValue.slice(-1) !== lesson[stateValue.length]) {
            this.setState({ mistakes: this.state.mistakes + 1 });
            this.props.handleMistake(true);
            // this.state.mistakes++;
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

    render() {
        return (
            <div className={style.textareaContainer}>
                <textarea autoFocus
                    className={style.inputField}

                    disabled={this.state.disabled}
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                {this.state.disabled && <FinishBoard result={this.state.win} />}
            </div>
        )
    }
}

CustomTextArea.propTypes = {
    lesson: PropTypes.string,
    mistake: PropTypes.bool,
    mistakeAddClass: PropTypes.any
}

export default CustomTextArea;