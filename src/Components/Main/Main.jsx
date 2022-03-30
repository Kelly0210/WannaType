import React from 'react';
import style from './Main.module.css';

import Display from '../Display/Display';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import Keyboard from '../Keyboard/Keyboard';
import { generateLesson } from '../common/generateLesson';
import { Lesson1 } from '../common/Lessons';
import StatusBar from '../StatusBar/StatusBar';



class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      lesson: generateLesson(Lesson1, 30),
      mistakeHappend: false,
      numberOfMistake: 0,
      lastLetter: '',
    }
    
    this.handleMistake = this.handleMistake.bind(this);
    this.passLastLetter = this.passLastLetter.bind(this);
    this.reloadLesson = this.reloadLesson.bind(this);
    this.mistakeCounter = this.mistakeCounter.bind(this);
  }

  handleMistake(boolean) {
    this.setState({ mistakeHappend: boolean });
  }

  mistakeCounter() {
    this.setState({ numberOfMistake: this.state.numberOfMistake + 1 });
  }

  passLastLetter(lastLetter) {
    this.setState({ lastLetter: lastLetter });
  }

  reloadLesson() {
    window.location.reload();
  }

  render() {
    return (
      <main className={style.main}>

        <StatusBar numberOfMistake={this.state.numberOfMistake} />

        <Display lesson={this.state.lesson}
          mistakeHappend={this.state.mistakeHappend} />

        <CustomTextArea
          handleMistake={this.handleMistake}
          mistakeCounter={this.mistakeCounter}
          numberOfMistake={this.state.numberOfMistake}

          lesson={this.state.lesson}
          reloadLesson={this.reloadLesson}

          passLastLetter={this.passLastLetter}
        />

        <Keyboard mistakeHappend={this.state.mistakeHappend}
          lastLetter={this.state.lastLetter} />
      </main>
    )
  }

}

export default Main;