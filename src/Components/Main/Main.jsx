import React from 'react';
import style from './Main.module.css';

import Display from '../Display/Display';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import Keyboard from '../Keyboard/Keyboard';
import { generateLesson } from '../common/generateLesson';
import { Lesson11, Lesson3 } from '../common/Lessons';
import StatusBar from '../StatusBar/StatusBar';



class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      lesson: generateLesson(Lesson11.chapter10, 32),
      mistakeHappend: false,
      numberOfMistake: 0,
      lastLetter: '',
      percentage: 0,
      cpm: 0,
    }

    this.handleMistake = this.handleMistake.bind(this);
    this.passLastLetter = this.passLastLetter.bind(this);
    this.reloadLesson = this.reloadLesson.bind(this);
    this.mistakeCounter = this.mistakeCounter.bind(this);
    this.completionPercentage = this.completionPercentage.bind(this);
    this.charactersPerMinute = this.charactersPerMinute.bind(this);
  }

  handleMistake(boolean) {
    this.setState({ mistakeHappend: boolean });
  }

  mistakeCounter() {
    this.setState({ numberOfMistake: this.state.numberOfMistake + 1 });
  }

  passLastLetter(lastLetter) {
    this.setState({ lastLetter });
  }

  completionPercentage(percentage) {
    this.setState({ percentage });
  }

  reloadLesson() {
    window.location.reload();
  }

  charactersPerMinute(cpm) {
    this.setState({ cpm });
  }

  render() {
    return (
      <main className={style.main}>

        <StatusBar numberOfMistake={this.state.numberOfMistake}
          percentage={this.state.percentage} cpm={this.state.cpm}
        />

        <Display lesson={this.state.lesson}
          mistakeHappend={this.state.mistakeHappend}
        />

        <CustomTextArea
          lesson={this.state.lesson}
          reloadLesson={this.reloadLesson}

          handleMistake={this.handleMistake}
          mistakeCounter={this.mistakeCounter}
          numberOfMistake={this.state.numberOfMistake}

          completionPercentage={this.completionPercentage}
          charactersPerMinute={this.charactersPerMinute}

          passLastLetter={this.passLastLetter}
        />

        <Keyboard mistakeHappend={this.state.mistakeHappend}
          lastLetter={this.state.lastLetter}
        />

      </main>
    )
  }

}

export default Main;