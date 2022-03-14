import React from 'react';
import style from './CustomTextArea.module.css';
import { generateLesson } from '../common/generateLesson';

const initialLetters = ['j', 'f', ' '];

class CustomTextArea extends React.Component {

    constructor() {
        super();
        this.state = {value: ''};
        this.state = {placeholder: generateLesson(initialLetters)}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <textarea autoFocus
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