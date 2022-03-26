import React from 'react';
import { Redirect } from 'react-router-dom';
import style from './CustomTextArea.module.css';


class CustomTextArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            lesson: this.props.lesson,
            mistakes: 0,
            disabled: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDisable = this.handleDisable.bind(this);
        this.mistakeAddClass = this.mistakeAddClass.bind(this);
    }

    handleChange(event) {
        let lesson = this.state.lesson;
        let stateValue = this.state.value;
        let inputValue = event.target.value;

        this.setState({ value: event.target.value });
        this.props.passLastLetter(inputValue.slice(-1));

        if (inputValue.slice(-1) !== lesson[stateValue.length]) {
            this.setState({ mistakes: this.state.mistakes + 1 });
            this.mistakeAddClass(true);
            // this.state.mistakes++;
        } else {
            this.mistakeAddClass(false);
        }

        if (stateValue.length === lesson.length) {
            console.log('You win!');
            // <Redirect to='/training/lesson-1/chapter-2' />
        }

        if (this.state.mistakes === 2) {
            this.handleDisable();
        }
    }

    handleDisable() {
        this.setState({ disabled: true });
    }

    mistakeAddClass(boolean) {
        this.props.mistakeAddClass(boolean);
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
            </div>
        )
    }
}

export default CustomTextArea;