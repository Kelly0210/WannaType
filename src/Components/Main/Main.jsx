import React from 'react';
import style from './Main.module.css';

import Display from '../Display/Display';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import Keyboard from '../Keyboard/Keyboard';
import { generateLesson } from '../common/generateLesson';
import { Lesson1 } from '../common/Lessons';



class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      lesson: generateLesson(Lesson1, 30),
      mistake: false,
      lastLetter: ''
    }
    this.handleMistake = this.handleMistake.bind(this);
    this.passLastLetter = this.passLastLetter.bind(this);
  }

  handleMistake(boolean) {
    this.setState({ mistake: boolean });
  }

  passLastLetter(lastLetter) {
    this.setState({ lastLetter: lastLetter });
  }

  render() {
    return (
      <main className={style.main}>
        <Display lesson={this.state.lesson}
          mistake={this.state.mistake} />

        <CustomTextArea lesson={this.state.lesson}
          handleMistake={this.handleMistake}
          passLastLetter={this.passLastLetter} />

        <Keyboard mistake={this.state.mistake}
          lastLetter={this.state.lastLetter} />
      </main>
    )
  }

}

export default Main;