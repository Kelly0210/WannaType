import React from 'react';
import style from './CustomTextArea.module.css';

const initialLetters = ['j', 'f', ' '];
let generateLesson = '';

for (let i = 0; i < 40; i++) {
    let generateLetters = initialLetters[Math.floor(Math.random() * 3)];
    generateLesson += generateLetters;
}

class CustomTextArea extends React.Component {

    constructor() {
        super();
        this.state = {value: ''};
        this.state = {placeholder: generateLesson}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.placeholder);
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

export default CustomTextArea