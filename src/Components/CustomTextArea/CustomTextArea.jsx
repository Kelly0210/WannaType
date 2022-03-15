import React from 'react';
import style from './CustomTextArea.module.css';
import { generateLesson } from '../common/generateLesson';
import { Lesson1 } from '../common/Lessons';


class CustomTextArea extends React.Component {

    constructor() {
        super();
        this.state = {value: '',
        placeholder: generateLesson(Lesson1, 20),
        mistake: 0,
        disabled: false,
    }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

        if (event.target.value.slice(-1) !== 'q') {
            console.log('mistake');
            this.state.mistake++;
        } else {
            console.log('Great');
        }

        if (this.state.mistake === 3) {
            console.log('You lose');
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