import React from 'react';
import style from './CustomTextArea.module.css';
import { generateLesson } from '../common/generateLesson';
import { Lesson1 } from '../common/Lessons';


class CustomTextArea extends React.Component {

    constructor() {
        super();
        this.state = {value: '',
        placeholder: generateLesson(Lesson1, 20),
        mistakes: 0,
        disabled: false,
    }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

        if (event.target.value.slice(-1) !== this.state.placeholder[this.state.value.length]) {
            this.state.mistakes++;
            console.log('mistake');
        } else {
            console.log('Great');
        }

        if (this.state.mistakes === 3) {
            this.handleDisable();
        }
    }

    handleDisable() {
        this.state.disabled = true;
    }

    render() {
        return (
            // <div dataPlaceholder={this.state.placeholder} className={style.placeholderr} >
            <div>
                <textarea autoFocus
                          disabled={this.state.disabled}
                          className={style.inputField}
                          onChange={this.handleChange}
                          value={this.state.value}
                          placeholder={this.state.placeholder}
                          />
            </div>
        )
    }
}

export default CustomTextArea;