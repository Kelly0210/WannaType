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
        this.handleDisable = this.handleDisable.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

        if (event.target.value.slice(-1) !== this.state.placeholder[this.state.value.length]) {
            this.setState({mistakes: this.state.mistakes + 1});
            // this.state.mistakes++;
            console.log('mistake');
        } else {
            console.log('Great');
        }

        if (this.state.mistakes === 2) {
            this.handleDisable();
        }
    }

    handleDisable() {
        this.setState({disabled: true});
    }

    render() {
        return (
            <div className={style.textareaContainer}>
                <textarea autoFocus
                          disabled={this.state.disabled}
                          className={style.inputField}
                          onChange={this.handleChange}
                          value={this.state.value}
                          />
            </div>
        )
    }
}

export default CustomTextArea;